import React, { useEffect, useContext, useState } from "react";
import "../style/Home.css";
import "../style/webseries.css";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import Footer from "./Footer";
function WebSeries() {
  const [projectId, setProjectId] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Initial page is 1
  const [limit, setLimit] = useState(10);
  const [hasNextPage, setHasNextPage] = useState(true); // Flag to track if there's a next page
  const {
    setVideoUrl,
    slider,
    setSlider,
    setNewFile,
    newFile,
    setSeaarchActive,
  } = useContext(MyContext);
  setSeaarchActive(false);
  useEffect(() => {
    // Fetch the projectId from wherever it is stored (e.g., localStorage)
    const storedProjectId = localStorage.getItem("projectID");
    if (storedProjectId) {
      setProjectId(storedProjectId);
      fetchData(page, "9i8o5q4pa4sj"); // Fetch data for the initial page
    }
  }, []);

  const fetchData = (currentPage, projectId) => {
    // Make the API call with projectId in the header and dynamic page and limit values
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}`,
      {
        method: "GET",
        headers: {
          projectID: "9i8o5q4pa4sj", // Use the projectId passed as a parameter
          // Add any other headers if needed
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        // Handle the API response data
        setData(responseJson);

        // Check if there's a next page of data
        setHasNextPage(responseJson.length === limit);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const loadNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage, "9i8o5q4pa4sj"); // Pass the projectId
  };

  const loadPreviousPage = () => {
    if (page > 1) {
      const previousPage = page - 1;
      setPage(previousPage);
      fetchData(previousPage, "9i8o5q4pa4sj"); // Pass the projectId
    }
  };

  return (
    <>
      <div className="webseries" onClick={() => setSlider(false)}>
        <h2>Webseries</h2>

        {/* <p>Project ID: {projectId}</p> */}
        {/* Display data fetched from the API */}
        {/* <pre>{JSON.stringify(data.data, null, 2)}</pre> */}
        <div className="card">
          {data &&
            data.data &&
            data.data.map((item) => (
              <Link to={`/ShowDetails/${item._id}`}>
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
        {/* <div>
        {page > 1 && <button onClick={loadPreviousPage}>Previous Page</button>}
        {<button onClick={loadNextPage}>Next Page</button>}
      </div> */}
      </div>
      <Footer />
    </>
  );
}

export default WebSeries;

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
