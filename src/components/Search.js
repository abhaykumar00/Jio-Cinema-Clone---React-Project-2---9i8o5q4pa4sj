// Watchlist.js
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../App";
import "../style/watchList.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Search() {
  const {
    setVideoUrl,
    setLessThanPixel,
    setNewFile,
    newFile,
    setActiveLink,
    setSeaarchActive,
    searchVAlue,
    setSlider,
    slider,
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
            item.keywords.includes(searchVAlue.toLowerCase()) ||
            item.title.toLowerCase().indexOf(searchVAlue.toLowerCase()) !== -1
          //   -1 ||
          // item.description
          //   .toLowerCase()
          //   .includes(searchVAlue.toLowerCase()) ||
          // item.description
          //   .toLowerCase()
          //   .indexOf(searchVAlue.toLowerCase()) !== -1
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
    <div
      className="watch"
      onClick={() => {
        setSlider(false);
        setLessThanPixel(false);
      }}
    >
      <h2 className="watch-h2">SearchList</h2>
      {searchVAlue && (
        <div className="watch-First-Div">
          {watchlist.map((show) => (
            <div key={show._id} className="watch-child-div">
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
