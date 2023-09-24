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
    <div style={{ overflow: "hidden" }}>
      <Carousel {...settings}>
        <Wrap>
          <Link to={`/ShowDetails/${data[0][0]._id}`}>
            <a>
              {data && data[0] && (
                <img
                  onClick={() => {
                    setVideoUrl(data[0][0].video_url);
                    setNewFile(data[0][0]);
                  }}
                  src={data[0][0].thumbnail}
                  alt=""
                />
              )}
            </a>
          </Link>
        </Wrap>

        <Wrap>
          <Link to={`/ShowDetails/${data[0][1]._id}`}>
            <a>
              {data && data[0] && (
                <img
                  onClick={() => {
                    setVideoUrl(data[0][1].video_url);
                    setNewFile(data[0][1]);
                  }}
                  src={data[0][1].thumbnail}
                  alt=""
                />
              )}
            </a>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/ShowDetails/${data[0][2]._id}`}>
            <a>
              {data && data[0] && (
                <img
                  onClick={() => {
                    setVideoUrl(data[0][2].video_url);
                    setNewFile(data[0][2]);
                  }}
                  src={data[0][2].thumbnail}
                  alt=""
                />
              )}
            </a>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/ShowDetails/${data[0][3]._id}`}>
            <a>
              {data && data[0] && (
                <img
                  onClick={() => {
                    setVideoUrl(data[0][3].video_url);
                    setNewFile(data[0][3]);
                  }}
                  src={data[0][3].thumbnail}
                  alt=""
                />
              )}
            </a>
          </Link>
        </Wrap>
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 1vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 20px;
      color: rgb(150, 158, 171);
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

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 80vh;
    }

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
    @media (width<600px) {
      img {
        width: 90vw;
        height: 50vh;
      }
    }

    video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
    }
  }
`;

export default ImageSlider;
