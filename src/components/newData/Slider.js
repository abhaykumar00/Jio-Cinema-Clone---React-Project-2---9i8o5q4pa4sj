import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Slider.css"; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../../App";

function Slider({ data }) {
  const {
    setVideoUrl,
    slider,
    setSlider,
    setNewFile,
    newFile,
    setLogin,
    setSeaarchActive,
  } = useContext(MyContext);
  const images = [
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?pid=ImgDet&rs=1",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClickNext = () => {
    if (currentIndex < data.data.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      className="slider1"
      style={{
        display: "flex",

        color: "white",
        flexDirection: "column",
      }}
    >
      <div className="slider-container1">
        <div
          className="slider-images"
          style={{
            transform: `translateX(-${currentIndex * 20}%)`,
          }} // Adjust percentage as needed
        >
          {data &&
            data.data &&
            data.data.map((item, index) => (
              <div key={item._id} style={{ height: "300px" }}>
                <Link to={`/play/${item._id}`}>
                  <div className="homeDiv">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      key={index}
                      className="thumbnail"
                      onClick={() => {
                        setVideoUrl(item.video_url);
                        setNewFile(item);
                      }}
                    />

                    <h5
                      style={{
                        position: "relative",
                        bottom: "100px",
                        left: "0",
                        width: "50%",
                        color: "black",
                        fontSize: "15px",
                        margin: "0",
                        color: "white",
                        textAlign: "center",
                        textDecoration: "none",
                        marginLeft: "30px",
                      }}
                    >
                      {item.title}
                    </h5>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div style={{ marginTop: "30px", zIndex: "1" }}>
        <button
          className="arrow-button"
          onClick={handleClickPrev}
          disabled={currentIndex === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="arrow-button"
          onClick={handleClickNext}
          disabled={currentIndex === data.data.length - 5}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
