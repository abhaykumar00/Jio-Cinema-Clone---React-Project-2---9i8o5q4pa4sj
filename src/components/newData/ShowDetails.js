import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ShowDetails.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sports from "./Sports";
import Footer from "../Footer";
const ShowDetails = () => {
  const newFile = JSON.parse(localStorage.getItem("newFile"));
  let { id } = useParams();
  const {
    setNewFile,
    setActiveLink,
    setVideoUrl,
    globalData,
    setSlider,
    slider,
  } = useContext(MyContext);
  console.log("this is newFile in ShowDEtails", newFile);
  setVideoUrl(newFile.video_url);
  const [slidedetailapi, setslidedetailapi] = useState({});

  setActiveLink("helo");
  // Function to copy URL to clipboard and show a toast

  const gdf = globalData.filter((data) =>
    newFile.keywords.includes(data.keywords[0])
  );

  const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show/${id}`;
  const headers = {
    projectId: "9i8o5q4pa4sj",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setslidedetailapi(data.data);
        setNewFile(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="DeatilsPage" onClick={() => setSlider(false)}>
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
              <div onClick={() => {}}></div>{" "}
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
