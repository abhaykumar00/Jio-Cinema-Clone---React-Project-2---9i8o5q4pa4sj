// Watchlist.js
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../App";
import "../style/watchList.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { toast } from "react-toastify";
function Watchlist() {
  const {
    setVideoUrl,
    videoUrl,
    setNewFile,
    newFile,
    setSeaarchActive,
    slider,
    setSlider,
    setLessThanPixel,
  } = useContext(MyContext);
  const [watchlist, setWatchlist] = useState([]);
  setSeaarchActive(false);
  async function fetchWatchlist() {
    try {
      const projectID = localStorage.getItem("projectID");
      const token = localStorage.getItem("jwtToken");
      const showID = localStorage.getItem("showID");

      // Append the showID as a query parameter to the URL
      const apiUrl = `https://academics.newtonschool.co/api/v1/ott/watchlist/like?showId=${showID}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: projectID,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data.shows, "this is fetchlist");
        setWatchlist(data.data.shows);
      } else {
        // Handle error response
        toast.error("Failed to fetch watchlist");
        console.error("Failed to fetch watchlist");
      }
    } catch (error) {
      toast.error("Server Error");
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    console.log("this is useEffect inside the watchlist for fetch the data");
    fetchWatchlist();
  }, []);

  const removeShowFromWatchlist = async (showId) => {
    try {
      console.log(showId, "this is showID");
      const token = localStorage.getItem("jwtToken");
      const projectID = "9i8o5q4pa4sj"; // Replace with your project ID
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/watchlist/like`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: "9i8o5q4pa4sj",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ showId: showId }),
        }
      );

      if (response.ok) {
        toast.success("Show removed successfully");
        // Remove the show from the watchlist in the UI
        setWatchlist((prevWatchlist) =>
          prevWatchlist.filter((show) => show.id !== showId)
        );
      } else {
        // Handle error response
        toast.error("Failed to remove show from watchlist");
        console.error("Failed to remove show from watchlist");
      }
    } catch (error) {
      toast.error("Server Error");
      console.error("Error:", error);
    }
    fetchWatchlist();
  };

  return (
    <div>
      <div
        className="watch"
        onClick={() => {
          setSlider(false);
          setLessThanPixel(false);
        }}
      >
        <h2 className="watch-h2">My Watchlist</h2>
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

              <div className="center">
                <button
                  className="centerButton"
                  onClick={() => removeShowFromWatchlist(show._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Watchlist;
