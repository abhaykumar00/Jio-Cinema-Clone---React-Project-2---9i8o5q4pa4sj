import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { MyContext } from "../App";
import ImageSlider from "./newData/ImageSlider";
import Sports from "./newData/Sports";

import Footer from "./Footer";
import { toast } from "react-toastify";
function Home() {
  const {
    setLogin,
    setSeaarchActive,
    setActiveLink,
    activeLink,
    globalData,
    setGlobalData,
    setSlider,
    slider,
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
    fetchData();
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
      <div>
        {data && data.data && <ImageSlider data={[data.data.slice(0, 4)]} />}
        {/* {data && data.data && <Slider data={data} />} */}
        <p className="mainHome"> Video song</p>
        {videoSong.length > 0 && <Sports data={videoSong} filter="videoSong" />}
        <p className="mainHome"> TV Shows</p>
        {tvShow.length > 0 && <Sports data={tvShow} filter="tv" />}
        <p className="mainHome"> Movie</p>
        {movieShow.length > 0 && <Sports data={movieShow} filter="Movie" />}

        <Footer />
      </div>
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
