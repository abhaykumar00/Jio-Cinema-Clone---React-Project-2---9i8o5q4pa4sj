import React, { useContext } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ImageSlider.css";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
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
        <div className="wrap">
          <Link to={`/ShowDetails/${data[0][0]._id}`}>
            <a className="wrap-a">
              {data && data[0] && (
                <img
                  className="wrap-a-img"
                  onClick={() => {
                    setVideoUrl(data[0][0].video_url);
                    setNewFile(data[0][0]);
                    localStorage.setItem("newFile", JSON.stringify(data[0][0]));
                  }}
                  src={data[0][0].thumbnail}
                  alt=""
                />
              )}
            </a>
          </Link>
        </div>

        <div className="wrap">
          <Link to={`/ShowDetails/${data[0][1]._id}`}>
            <a className="wrap-a">
              {data && data[0] && (
                <img
                  className="wrap-a-img"
                  onClick={() => {
                    setVideoUrl(data[0][1].video_url);
                    setNewFile(data[0][1]);
                    localStorage.setItem("newFile", JSON.stringify(data[0][1]));
                  }}
                  src={data[0][1].thumbnail}
                  alt=""
                />
              )}
            </a>
          </Link>
        </div>
        <div className="wrap">
          <Link to={`/ShowDetails/${data[0][2]._id}`}>
            <a className="wrap-a">
              {data && data[0] && (
                <img
                  className="wrap-a-img"
                  onClick={() => {
                    setVideoUrl(data[0][2].video_url);
                    setNewFile(data[0][2]);
                    localStorage.setItem(
                      "newFile",
                      JSON.stringify(data[(0, 2)])
                    );
                  }}
                  src={data[0][2].thumbnail}
                  alt=""
                />
              )}
            </a>
          </Link>
        </div>
        <div className="wrap">
          <Link to={`/ShowDetails/${data[0][3]._id}`}>
            <a className="wrap-a">
              {data && data[0] && (
                <img
                  className="wrap-a-img"
                  onClick={() => {
                    setVideoUrl(data[0][3].video_url);
                    setNewFile(data[0][3]);
                    localStorage.setItem("newFile", JSON.stringify(data[0][3]));
                  }}
                  src={data[0][3].thumbnail}
                  alt=""
                />
              )}
            </a>
          </Link>
        </div>
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
