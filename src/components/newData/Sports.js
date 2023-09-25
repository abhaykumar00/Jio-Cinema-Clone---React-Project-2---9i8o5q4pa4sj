import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sports(data) {
  const { setVideoUrl, setNewFile, setSlider, setLogin, setSeaarchActive } =
    useContext(MyContext);
  console.log("hey this is data ", data.data.length, data);
  // You can adjust the number of images shown at once and the slide width here
  const imagesPerSlide = 5;
  const slideWidth = 200;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClickNext = () => {
    const maxIndex = data.data.length - imagesPerSlide;
    if (currentIndex < maxIndex + 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  console.log("this is sport page", data.data);

  return (
    <>
      <div
        className="container"
        style={{ height: "300px", alignItems: "flex-start" }}
      >
        <div
          className="thumbnail-container1"
          onClick={() => setSlider(false)}
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            display: "flex",
            flexDirection: "row",
            transition: "transform 0.5s ease",
          }}
        >
          {data &&
            data.data &&
            data.data.map((item) => (
              <div key={item._id} className="slide">
                <Link to={`/ShowDetails/${item._id}`}>
                  <div className="homeDiv">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="thumbnail"
                      style={{ width: "200px" }}
                      onClick={() => {
                        setVideoUrl(item.video_url);
                        setNewFile(item);
                        localStorage.setItem("newFile", JSON.stringify(item));
                      }}
                    />
                    <h5 className="thumbnail-title">{item.title}</h5>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        {currentIndex > 0 && (
          <button
            className="arrow-button prev-button"
            onClick={handleClickPrev}
            disabled={currentIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        <button
          className="arrow-button next-button"
          onClick={handleClickNext}
          disabled={currentIndex === data.data.length - imagesPerSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
}

export default Sports;
