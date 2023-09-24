import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import { MyContext } from "../App";
import ImageSlider from "./newData/ImageSlider";
import Sports from "./newData/Sports";

import Footer from "./Footer";
function Home() {
  const {
    setVideoUrl,
    slider,
    setSlider,
    setNewFile,
    newFile,
    setLogin,
    setSeaarchActive,
    setActiveLink,
    activeLink,
    globalData,
    setGlobalData,
  } = useContext(MyContext);
  setSeaarchActive(false);
  setActiveLink("Home");
  console.log(activeLink, "this is active link");
  const [projectId, setProjectId] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [tvShow, setTVShow] = useState([]);
  const [videoSong, setVideoSong] = useState([]);
  const [movieShow, setMovieShow] = useState([]);
  setLogin(true);
  useEffect(() => {
    const storedProjectId = localStorage.getItem("projectID");
    if (storedProjectId) {
      setProjectId(storedProjectId);
      fetchData(page, storedProjectId);
    }
  }, [page]); // Update data when the page changes
  if (!localStorage.getItem("jwtToken")) window.location.href = "/login";
  const fetchData = (currentPage, projectId) => {
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?page=${1}&limit=100`,
      {
        method: "GET",
        headers: {
          projectID: "9i8o5q4pa4sj",
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        setHasNextPage(responseJson.length === limit);
        console.log("this is data", responseJson.data);
        setGlobalData(responseJson.data);
        const tv = responseJson.data.filter(
          (value) => value.type === "tv show"
        );
        setTVShow(tv);
        const vid = responseJson.data.filter(
          (value) => value.type === "video song"
        );
        setVideoSong(vid);

        const mov = responseJson.data.filter((value) => value.type === "movie");
        setMovieShow(mov);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log(globalData);
  const loadNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const loadPreviousPage = () => {
    if (page > 1) {
      const previousPage = page - 1;
      setPage(previousPage);
    }
  };
  console.log("this is tv show", tvShow);
  return (
    <>
      <br></br>
      <br />
      {data && data.data && <ImageSlider data={[data.data.slice(0, 4)]} />}
      {/* {data && data.data && <Slider data={data} />} */}
      <p style={{ color: "white", marginLeft: "20px" }}> Video song</p>
      {videoSong.length > 0 && <Sports data={videoSong} filter="videoSong" />}
      <p style={{ color: "white", marginLeft: "20px" }}> TV Shows</p>
      {tvShow.length > 0 && <Sports data={tvShow} filter="tv" />}
      <p style={{ color: "white", marginLeft: "20px" }}> Movie</p>
      {movieShow.length > 0 && <Sports data={movieShow} filter="Movie" />}
      {/* <div className="thumbnail-container" onClick={() => setSlider(false)}>
        {data &&
          data.data &&
          data.data.map((item) => (
            <div key={item._id}>
              <Link to={`/ShowDetails`}>
                <div
                  className="homeDiv"
                  style={{
                    marginRight: "10px",
                    height: "330px",
                    width: "200px",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="thumbnail"
                    onClick={() => {
                      setVideoUrl(item.video_url);
                      setNewFile(item);
                      console.log(item);
                    }}
                  />

                  <h5
                    style={{
                      position: "relative",
                      bottom: "100px",
                      left: "0",
                      width: "50%",
                      color: "black",
                      fontSize: "15px",
                      margin: "0",
                      color: "white",
                      textAlign: "center",
                      textDecoration: "none",
                      marginLeft: "30px",
                    }}
                  >
                    {item.title}
                  </h5>
                </div>
              </Link>
            </div>
          ))}*/}
      {/* <div className="Button">
          {page > 1 && (
            <img
              className="leftButton"
              onClick={loadPreviousPage}
              src="https://th.bing.com/th/id/R.df69f1b18bb49c4da8de607d69a7179a?rik=nCyjv6EXGfHqNQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f3%2fLeft-Arrow-PNG-HD.png&ehk=53%2fNLSNKaSDiWy12wmuj6WAr%2fZSz8SOOzjQd3fQ%2f6AE%3d&risl=&pid=ImgRaw&r=0"
            />
          )}
          {
            <img
              className="rightButton"
              onClick={loadNextPage}
              src="https://www.jiocinema.com/images/White_Front_Arrow.svg"
            />
          }
        </div> */}
      {/*</div> */}
      {/* <div style={{ position: "relative", bottom: "20px", left: "5px" }}>
        {page > 1 && (
          <button
            style={{ padding: "0 10px 0 10px ", marginRight: "10px" }}
            onClick={loadPreviousPage}
          >
            prev
          </button>
        )}
        <button style={{ padding: "0 10px 0 10px " }} onClick={loadNextPage}>
          next
        </button>
      </div> */}
      <Footer />
    </>
  );
}

export default Home;

// {
//   "status": "success",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjRiNWY2ODNiMTUwM2FmYThhOTc4OCIsImlhdCI6MTY5Mzc1ODk2NywiZXhwIjoxNzI1Mjk0OTY3fQ.ZK4-XIoTADaC5o1HbEm7MAh7FdLSkcHqsj7BQE5NlJ0",
//   "data": {
//       "user": {
//           "_id": "64f4b5f683b1503afa8a9788",
//           "name": "test",
//           "email": "test@gmail.com",
//           "address": {},
//           "paymentDetails": {},
//           "education": [],
//           "skills": []
//       }
//   }
// }
