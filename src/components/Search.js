// Watchlist.js
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../App";
import "../style/watchList.css";
import { Link } from "react-router-dom";
function Search() {
  const {
    setVideoUrl,
    videoUrl,
    setNewFile,
    newFile,
    setActiveLink,
    setSeaarchActive,
    searchVAlue,
  } = useContext(MyContext);
  setSeaarchActive(true);
  const [watchlist, setWatchlist] = useState([]);
  setActiveLink("");

  useEffect(() => {
    fetchWatchlist();
  }, [searchVAlue]);
  async function fetchWatchlist() {
    try {
      const token = localStorage.getItem("jwtToken");
      const showID = localStorage.getItem("showID");

      // Append the showID as a query parameter to the URL
      const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show?page=${1}&limit=${100}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: "9i8o5q4pa4sj",
        },
      });

      if (response.ok) {
        const data = await response.json();

        const filteredList = data.data.filter(
          (item) =>
            item.keywords.includes(searchVAlue) ||
            item.description.includes(searchVAlue) ||
            item.description.indexOf(searchVAlue) !== -1
        );

        setWatchlist(filteredList);
      } else {
        // Handle error response
        console.error("search is failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="watch">
      <h2>SearchList</h2>
      {searchVAlue && (
        <div className="watch1">
          {watchlist.map((show) => (
            <div key={show._id} className="watch2">
              {show.title}
              <Link to={`/ShowDetails/${show._id}`}>
                <img
                  onClick={() => {
                    setVideoUrl(show.video_url);
                    setNewFile(show);
                    localStorage.setItem("newFile", JSON.stringify(show));
                  }}
                  src={show.thumbnail}
                  className="watchImg"
                ></img>
              </Link>

              <div className="center"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
