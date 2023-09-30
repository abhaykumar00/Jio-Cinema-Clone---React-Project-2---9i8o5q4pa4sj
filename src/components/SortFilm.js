import React, { useEffect, useContext, useState } from "react";
import "../style/Home.css";
import "../style/webseries.css";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import Footer from "./Footer";
import { ListItem } from "@mui/material";
function SortFilm() {
  const [projectId, setProjectId] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [hasNextPage, setHasNextPage] = useState(true);
  const {
    setVideoUrl,
    setLessThanPixels,
    slider,
    setSlider,
    setNewFile,
    newFile,
    setSeaarchActive,
  } = useContext(MyContext);
  setSeaarchActive(false);
  useEffect(() => {
    //Fetch the data from local storage .This is store when we login
    const storedProjectId = localStorage.getItem("projectID");
    if (storedProjectId) {
      setProjectId(storedProjectId);
      fetchData(page, storedProjectId);
    }
    fetchData();
  }, []);

  const fetchData = (currentPage, projectId) => {
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "short film"}`,
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const loadNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage, projectId);
  };

  const loadPreviousPage = () => {
    if (page > 1) {
      const previousPage = page - 1;
      setPage(previousPage);
      fetchData(previousPage, projectId);
    }
  };

  return (
    <div className="webseries" onClick={() => {slider && setSlider(false);setLessThanPixel(false)}}>
      <h2 className="webseries-h2">Sort Film </h2>

      <div className="card">
        {data &&
          data.data &&
          data.data.map((item) => (
            <Link to={`/ShowDetails/${item._id}`}>
              <div
                onClick={() => {
                  setVideoUrl(item.video_url);
                  setNewFile(item);
                  localStorage.setItem("newFile", JSON.stringify(item));
                }}
                key={item._id}
                className="cardDiv"
              >
                <img
                  className="cardDiv-img"
                  src={item.thumbnail}
                  alt={item.title}
                />

                <h3 className="card-title">{item.title}</h3>
              </div>
            </Link>
          ))}
      </div>
      {/* <div>
        {page > 1 && <button onClick={loadPreviousPage}>Previous Page</button>}
        {<button onClick={loadNextPage}>Next Page</button>}
      </div> */}
      <Footer />
    </div>
  );
}

export default SortFilm;

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
