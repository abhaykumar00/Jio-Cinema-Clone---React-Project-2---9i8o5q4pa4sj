import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import "./ShowDetails.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sports from "./Sports";
import Footer from "../Footer";
const ShowDetails = (props) => {
  const { setNewFile, newFile, setActiveLink, setVideoUrl, globalData } =
    useContext(MyContext);
  console.log(globalData[0].keywords[0], "thisi s global data");
  console.log(globalData[0].keywords[0], "thisi s global data");
  setVideoUrl(newFile.video_url);
  const [slidedetailapi, setslidedetailapi] = useState({});
  const [randomSliceStart, setRandomSliceStart] = useState(0);
  setActiveLink("heloo");
  // Function to copy URL to clipboard and show a toast
  const share = () => {
    const textarea = document.createElement("textarea");
    textarea.value = "url";
    document.body.appendChild(textarea);
    textarea.select();

    document.body.removeChild(textarea);
    toast.success(`Copied URL to clipboard`);
  };
  // Function to handle sharing through the Web Share API
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share",
          text: "Shrable",
          url: "url",
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Sharing not supported on this browser.");
    }
  };
  const gdf = globalData.filter((data) =>
    newFile.keywords.includes(data.keywords[0])
  );
  console.log(gdf, "this is gdc");
  const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show/${newFile._id}`;
  const headers = {
    projectId: "62b02tyexb5i",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => setslidedetailapi(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [newFile]);

  // Generate a random starting index for suggested shows
  console.log(newFile.keywords);
  return (
    <div className="DeatilsPage">
      <section className="detailssection">
        <div className="detailsdescription">
          <div className="detailalltext">
            <h1>{newFile.title}</h1>
            <p>
              {newFile?.keywords?.map((keyword, index) => (
                <span key={index}>
                  <FiberManualRecordIcon
                    style={{ fontSize: "8px", color: "yellow", margin: "2px" }}
                  />
                  {keyword}
                </span>
              ))}
              {""}
              <FiberManualRecordIcon
                style={{ fontSize: "8px", color: "yellow", margin: "2px" }}
              />
              <span>{newFile.type}</span>
            </p>
            <p>{newFile.description}</p>
            <p>
              <span id="spantext">Cast: </span> {newFile.cast?.join(", ")}
            </p>
            <p>
              <span id="spantext">Director: </span>
              {newFile?.director}
            </p>
            <div className="detailsbtn">
              {" "}
              <Link to={`/play/${newFile._id}`}>
                <button
                  className="detailsbtnButton"
                  onClick={() => setVideoUrl(newFile.video_url)}
                >
                  Play
                </button>
              </Link>
            </div>
            <div className="detailsactionbtn">
              <div
                onClick={() => {
                  share();
                  handleShare();
                }}
              ></div>{" "}
            </div>
          </div>
        </div>
        <div
          className="detailsimage"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0),rgba(21, 21, 21, 1)), url(${newFile.thumbnail})`,
          }}
        ></div>
      </section>
      {/* Displaying suggested shows */}
      {/* <section className="detailsuggestion">
        <ToastContainer />
      </section> */}
      <h3 style={{ color: "white", marginLeft: "15px" }}>More Like This</h3>
      <Sports data={gdf} />
      <Footer />
    </div>
  );
};

export default ShowDetails;
