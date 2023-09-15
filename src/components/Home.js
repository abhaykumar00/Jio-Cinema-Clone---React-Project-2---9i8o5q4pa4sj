import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import { MyContext } from "../App";
function Home() {
  const { setVideoUrl, slider, setSlider, setNewFile, newFile } =
    useContext(MyContext);
  const [projectId, setProjectId] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [hasNextPage, setHasNextPage] = useState(true);

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
      `https://academics.newtonschool.co/api/v1/ott/show?page=${currentPage}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          projectID: projectId,
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        setHasNextPage(responseJson.length === limit);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

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

  return (
    <div className="thumbnail-container">
      {data &&
        data.data &&
        data.data.map((item) => (
          <div key={item._id}>
            <Link to={`/play/${item._id}`}>
              <div
                className="homeDiv"
                style={{ marginRight: "0", height: "468px", width: "200px" }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="thumbnail"
                  onClick={() => {
                    setVideoUrl(item.video_url);
                    setNewFile(item);
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
        ))}
      <div className="Button">
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
            src="https://th.bing.com/th/id/R.4d4b573fe79ed589b1d23413799b5893?rik=6lJ35%2fMtP3jELg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fright-arrow-png-arrow-png-image-40020-6304.png&ehk=ed%2bXW74ewBes%2fFisUawt5Zs7T%2bUa8zX076f8062%2bfpo%3d&risl=&pid=ImgRaw&r=0"
          />
        }
      </div>
    </div>
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
