import React, { useContext, useState } from "react";
import { MyContext } from "../App"; // Import your context
import "../style/Video.css";
function VideoPlayer() {
  // Use the useContext hook to access the context
  const [watchlist, setWatchlist] = useState([]);
  const [match, setMatch] = useState(true);
  const { videoUrl, setNewFile, newFile } = useContext(MyContext);
  const projectID = localStorage.getItem("projectID");
  const token = localStorage.getItem("jwtToken");
  console.log(newFile, "this is new file");
  async function handleWatchList() {
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
        // Request was successful, continue handling the response data
        const responseData = await response.json(); // Assuming the response is JSON

        // You can do something with responseData here, depending on the API's response format
        console.log("Response data:", responseData);
      } else {
        // Request failed (e.g., due to authentication issues or server errors)
        // Handle the error as needed
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
      {match && (
        <h6 className="playerWatch">
          <span onClick={handleWatchList}>+</span>watchList
        </h6>
      )}
    </div>
  );
}

export default VideoPlayer;
