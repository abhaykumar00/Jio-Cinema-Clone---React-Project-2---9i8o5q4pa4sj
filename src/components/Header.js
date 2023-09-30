import React, { useEffect, useRef } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { MyContext } from "../App";
import SortFilm from "./SortFilm";
import { toast } from "react-toastify";
function Header() {
  // Initialize with the default active link
  const [sortFilm, setSortFilm] = useState(true);
  const {
    inputRef,
    setVideoUrl,
    slider,
    setSlider,
    activeLink,
    setActiveLink,
    login,
    setLogin,
    searchVAlue,
    setSearchVAlue,
    searchActive,
    setSeaarchActive,
    lessThanPixel,
    setLessThanPixel,
  } = useContext(MyContext);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  function handleClickonInput() {
    if (!searchActive) {
      setSeaarchActive(true);
      setActiveLink("");
    }
  }

  const [middleSlider, setMiddleSlider] = useState(false);
  const myName = localStorage.getItem("myName");

  const [myLocalData, setMYLocalData] = useState([]);
  useEffect(() => {
    const mydata = localStorage.getItem("myLocalData") || [
      ["/", "Home"],
      ["subscription", "Subscription"],
      ["Watchlist", "Watchlist"],
      ["web-series", "Web Series"],
    ];
    if (!localStorage.getItem("myName")) setActiveLink("hwy");
    setMYLocalData(mydata);
  }, []);

  return (
    <div
      className="header"
      onClick={() => {
        lessThanPixel && setLessThanPixel(false);
        slider && setSlider(false);
      }}
    >
      <div className="headerleft">
        <img
          className="menu"
          onClick={() => {
            setLessThanPixel(!lessThanPixel);
          }}
          src="https://th.bing.com/th/id/OIP.TxsaadwZtg4rcZHQJvFGpgHaHX?pid=ImgDet&rs=1"
        ></img>
        <Link to="/">
          <img
            className="logoofJio"
            src="https://www.jiocinema.com/images/jc_logo_v2.svg"
            alt="logo"
          />
        </Link>
        {myLocalData.map((data) => (
          <h4
            className={` ${activeLink === data[1] ? "active" : ""}`}
            onClick={() => {
              handleLinkClick(data[1]);
            }}
          >
            <Link className="logojio-Link" to={`${data[0]}`}>
              {data[1]}
            </Link>
          </h4>
        ))}
        <div className="parentHeaderNewGroup">
          <h5
            onClick={() => setMiddleSlider(!middleSlider)}
            className="headerNewGroup"
          >
            +
          </h5>
          {middleSlider && (
            <div
              onClick={() => setMiddleSlider(false)}
              className="newAddGroupDiv"
            >
              <h4
                onClick={() => {
                  if (sortFilm) {
                    setMYLocalData([...myLocalData, ["SortFilm", "SortFilm"]]);
                    setSortFilm(false);
                    console.log("this is sort film");
                    toast.success("sort film added successfully");
                  } else toast.error("This is already added");
                }}
                className="newAddGroupDivh4"
              >
                SortFilm
              </h4>
            </div>
          )}
        </div>
      </div>
      {lessThanPixel && (
        <div className="lessWidth">
          {myLocalData.map((data) => (
            <h4
              className={` ${activeLink === data[1] ? "active" : ""}`}
              onClick={() => {
                setLessThanPixel(!lessThanPixel);
                handleLinkClick(data[1]);
              }}
            >
              <Link className="lessWidht-Link" to={`${data[0]}`}>
                {data[1]}
              </Link>
            </h4>
          ))}
          {login && (
            <h6
              onClick={() => {
                localStorage.setItem("jwtToken", "");
                localStorage.setItem("myName", "");
                setActiveLink("sd");
                window.location.href = "/";
              }}
              className="lessWidthSignOut"
            >
              SignOut
            </h6>
          )}
        </div>
      )}
      <div className="headerRight">
        <Link to="/search">
          {!searchActive && (
            <input
              className="headerRight-input"
              id={inputRef}
              ref={inputRef}
              type="text"
              placeholder="Search"
              onClick={handleClickonInput}
              onChange={(e) => {
                console.log(e.target.value);
                setSearchVAlue(e.target.value);
              }}
            />
          )}
        </Link>
        {searchActive && (
          <input
            id={inputRef}
            ref={inputRef}
            type="text"
            placeholder="Search"
            onChange={(e) => {
              console.log(e.target.value);
              setSearchVAlue(e.target.value);
            }}
          />
        )}
        <img
          onClick={() => {
            setSlider(!slider);
          }}
          className="logo"
          src="https://www.jiocinema.com/images/profile/profile_avatar.svg"
          alt="Icon"
        />
      </div>
      {slider && (
        <div className="slider" onClick={() => setSlider(!slider)}>
          <div>
            <img src="https://www.jiocinema.com/images/profile/profile_avatar.svg" />
            {myName && <h3 className="sliderH5">Hi! {myName}</h3>}
            {!myName && <h3 className="sliderH5">Please Login!</h3>}
          </div>
          {!login && (
            <Link to="/login">
              <h1
                onClick={() => {
                  localStorage.setItem("jwtToken", "");
                  localStorage.setItem("myName", "");
                  setActiveLink("sd");
                  // window.location.href = "/";
                }}
              >
                Login
              </h1>
            </Link>
          )}
          {!login && (
            <Link to="/SignUp">
              <h1
                onClick={() => {
                  // window.location.href = "/SignUp";
                  setSlider(false);
                }}
              >
                SignUp
              </h1>
            </Link>
          )}
          {/* {login && (
            <h1
              onClick={() => {
                window.location.href = "/PasswordUpdateForm";
                setSlider(false);
              }}
            >
              Change Password
            </h1>
          )} */}
          {login && (
            <h1
              onClick={() => {
                localStorage.setItem("jwtToken", "");
                localStorage.setItem("myName", "");
                setActiveLink("sd");
                window.location.href = "/";
              }}
            >
              SignOut
            </h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
