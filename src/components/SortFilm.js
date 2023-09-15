import React, { useEffect, useContext, useState } from "react";
import "../style/Home.css";
import "../style/webseries.css";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
function SortFilm() {
  const [projectId, setProjectId] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [hasNextPage, setHasNextPage] = useState(true);
  const { setVideoUrl, slider, setSlider, setNewFile, newFile } =
    useContext(MyContext);
  useEffect(() => {
    //Fetch the data from local storage .This is store when we login
    const storedProjectId = localStorage.getItem("projectID");
    if (storedProjectId) {
      setProjectId(storedProjectId);
      fetchData(page, storedProjectId);
    }
  }, []);

  const fetchData = (currentPage, projectId) => {
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "short film"}`,
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
    <div className="webseries">
      <h2>Welcome to the Sort Film Page</h2>

      <div className="card">
        {data &&
          data.data &&
          data.data.map((item) => (
            <Link to={`/play/${item._id}`}>
              <div
                onClick={() => {
                  setVideoUrl(item.video_url);
                  setNewFile(item);
                }}
                key={item._id}
                className="card1"
              >
                <img src={item.thumbnail} alt={item.title} />

                <h3 className="card-title">{item.title}</h3>
              </div>
            </Link>
          ))}
      </div>
      <div>
        {page > 1 && <button onClick={loadPreviousPage}>Previous Page</button>}
        {<button onClick={loadNextPage}>Next Page</button>}
      </div>
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
