import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "../App"; // Import your context
import "../style/Video.css";
import { ref, set, remove } from "firebase/database";
import { database } from "./newData/firebase";
import { fireStoreSetting } from "./newData/fireStoreSetting";
function VideoPlayer() {
  // Use the useContext hook to access the context
  const myRef = useRef([]);
  const [isValueInArray, setIsValueInArray] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [match, setMatch] = useState(true);
  const {
    videoUrl,
    setNewFile,
    newFile,
    fetchedFirestoreData,
    setfetchedFirestoreData,
  } = useContext(MyContext);

  const projectID = localStorage.getItem("projectID");
  const token = localStorage.getItem("jwtToken");

  async function setting(fetchVAlue = "fetch") {
    console.log("setting");
    await fireStoreSetting(newFile._id, fetchVAlue, myRef);

    const value = myRef.current.includes(newFile._id);
    setIsValueInArray(value);
    console.log("this is fetch data from firebase in videoPlayer", value);
  }
  useEffect(() => {
    setting();
  }, [videoUrl]);
  // const isValueInArray = fetchedFirestoreData.includes(newFile._id);
  const removeShowFromWatchlist = async (showId) => {
    try {
      console.log(showId, "this is showID");
      const token = localStorage.getItem("jwtToken");
      const projectID = "Your Project ID"; // Replace with your project ID
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
        // Remove the show from the watchlist in the UI
        setWatchlist((prevWatchlist) =>
          prevWatchlist.filter((show) => show.id !== showId)
        );
      } else {
        // Handle error response
        console.error("Failed to remove show from watchlist");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    fetchWatchlist();
  };
  async function handleWatchList() {
    fireStoreSetting(newFile._id, "add", myRef);
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like/",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: projectID,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ showId: newFile }),
        }
      );

      if (response.ok) {
        // Show was successfully added to the watchlist

        console.log(newFile._id, "Show added to watchlist");
      } else {
        // Handle error response
        console.error("Failed to add show to watchlist");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        {
          method: "GET", // Change the method to GET
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: projectID,
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        console.log("Response data:", responseData);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      // Handle any exceptions that may occur during the fetch request
      console.error("An error occurred:", error);
    }
  }
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
        console.log(data, "this is fetchlist");
        setWatchlist(data.data.shows);
      } else {
        // Handle error response
        console.error("Failed to fetch watchlist");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="video-player-container">
      <h2>Video Player</h2>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {match && !isValueInArray && (
        <h6 className="playerWatch">
          <span
            onClick={() => {
              handleWatchList();
              setting("add").then(() => {
                setting("fetch");
              });
            }}
          >
            +
          </span>
          watchList
        </h6>
      )}
      {match && isValueInArray && (
        <h6 className="playerWatch">
          <span
            onClick={() => {
              removeShowFromWatchlist(newFile._id);

              setting("delete").then(() => {
                setting("fetch");
              });
            }}
          >
            -
          </span>
          Remove
        </h6>
      )}
    </div>
  );
}

export default VideoPlayer;
