import React, { useContext } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ImageSlider.css";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import ShowDetails from "./ShowDetails";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const ImageSlider = ({ data }) => {
  console.log(data, "this is data in image slider");
  const {
    setVideoUrl,
    slider,
    setSlider,
    setNewFile,
    newFile,
    setLogin,
    setSeaarchActive,
    setActiveLink,
    activeLink,
  } = useContext(MyContext);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="imageSlider" onClick={() => slider && setSlider(false)}>
      <Carousel {...settings}>
        {data[0].map((newFile) => (
          <div className="wrap">
            <div className="DeatilsPage" onClick={() => setSlider(false)}>
              <section className="detailssection">
                <div className="detailsdescription">
                  <div className="detailalltext">
                    <h1>{newFile.title}</h1>
                    <p>
                      {newFile?.keywords?.map((keyword, index) => (
                        <span key={index}>
                          <FiberManualRecordIcon
                            style={{
                              fontSize: "8px",
                              color: "yellow",
                              margin: "2px",
                            }}
                          />
                          {keyword}
                        </span>
                      ))}
                      {""}
                      <FiberManualRecordIcon
                        style={{
                          fontSize: "8px",
                          color: "yellow",
                          margin: "2px",
                        }}
                      />
                      <span>{newFile.type}</span>
                    </p>
                    <p>{newFile.description}</p>
                    <p>
                      <span id="spantext">Cast: </span>{" "}
                      {newFile.cast?.join(", ")}
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
            </div>
            {/* <Link to={`/ShowDetails/${val._id}`}>
              <a className="wrap-a">
                {data && data[0] && (
                  <img
                    className="wrap-a-img"
                    onClick={() => {
                      setVideoUrl(val.video_url);
                      setNewFile(val);
                      localStorage.setItem("newFile", JSON.stringify(val));
                    }}
                    src={val.thumbnail}
                    alt=""
                  />
                )}
              </a>
            </Link> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: s5vw;
    z-index: 1;
  }

 
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

export default ImageSlider;
