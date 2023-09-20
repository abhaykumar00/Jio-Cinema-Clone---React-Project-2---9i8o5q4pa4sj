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
    inputRef,
  } = useContext(MyContext);
  setSeaarchActive(true);
  const [watchlist, setWatchlist] = useState([]);
  setActiveLink("");
  console.log("this is search", searchVAlue);
  useEffect(() => {
    fetchWatchlist();
  }, [searchVAlue]);
  async function fetchWatchlist() {
    try {
      const token = localStorage.getItem("jwtToken");
      const showID = localStorage.getItem("showID");

      // Append the showID as a query parameter to the URL
      const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show?page=${1}&limit=${100}`;
      console.log("Fetchlist is callesrl");
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: "9i8o5q4pa4sj",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data[0], "this is fetchlist");
        const filteredList = data.data.filter(
          (item) =>
            item.keywords.includes(searchVAlue) ||
            item.description.includes(searchVAlue)
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

  useEffect(() => {
    // Fetch the user's watchlist using the "Get My Watchlist" endpoint
    console.log("rhis is useEffect");
  }, []);

  // Function to handle removing a show from the watchlist

  return (
    <div className="watch">
      <h2>SearchList</h2>
      {searchVAlue && (
        <div className="watch1">
          {watchlist.map((show) => (
            <div key={show._id} className="watch2">
              {show.title}
              <Link to={`/play/${show._id}`}>
                <img
                  onClick={() => {
                    setVideoUrl(show.video_url);
                    setNewFile(show);
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
