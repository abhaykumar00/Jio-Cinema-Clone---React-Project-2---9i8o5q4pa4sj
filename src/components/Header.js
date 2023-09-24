import React, { useEffect, useRef } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { MyContext } from "../App";
import SortFilm from "./SortFilm";
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
  } = useContext(MyContext);
  const [lessThanPixel, setLessThanPixel] = useState(false);
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
      }}
    >
      <div className="header1">
        <img
          onClick={() => {
            setLessThanPixel(!lessThanPixel);
          }}
          className="menu"
          src="https://th.bing.com/th/id/OIP.TxsaadwZtg4rcZHQJvFGpgHaHX?pid=ImgDet&rs=1"
        ></img>
        <img src="https://www.jiocinema.com/images/jc_logo_v2.svg" alt="logo" />
        {myLocalData.map((data) => (
          <h4
            className={` ${activeLink === data[1] ? "active" : ""}`}
            onClick={() => {
              handleLinkClick(data[1]);
            }}
          >
            <Link
              to={`${data[0]}`}
              style={{
                textDecoration: "none",
                color: "white",
                padding: "10px 10px",
              }}
            >
              {data[1]}
            </Link>
          </h4>
        ))}
        <div style={{ position: "relative" }}>
          <h5
            onClick={() => setMiddleSlider(!middleSlider)}
            className="headerNewGroup"
            style={{ fontSize: "50px", padding: "0", margin: "0" }}
          >
            +
          </h5>
          {middleSlider && (
            <div
              onClick={() => setMiddleSlider(false)}
              className="newAddGroupDiv"
              style={{
                height: "350px",
                width: "200px",
                position: "absolute",
                top: "60px",
                backgroundColor: "grey",
                zIndex: "100",

                left: "55%",
              }}
            >
              <h4
                onClick={() => {
                  if (sortFilm) {
                    setMYLocalData([...myLocalData, ["SortFilm", "SortFilm"]]);
                    setSortFilm(false);
                    console.log("this is sort film");
                  }
                }}
                className="newAddGroupDivh4"
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                SortFilm
              </h4>
            </div>
          )}
        </div>
        {/* <h4
          className={`${activeLink === "subscription" ? "active" : ""}`}
          onClick={() => handleLinkClick("subscription")}
        >
          <Link
            to="/subscription"
            style={{
              textDecoration: "none",
              color: "white",
              padding: "10px 10px",
            }}
          >
            Subscription
          </Link>
        </h4> */}
        {/* <h4
          className={` ${activeLink === "Watchlist" ? "active" : ""}`}
          onClick={() => handleLinkClick("Watchlist")}
        >
          <Link
            to="/Watchlist"
            style={{
              textDecoration: "none",
              color: "white",
              padding: "10px 10px",
            }}
          >
            Watchlist
          </Link>
        </h4> */}
        {/* <h4
          className={` ${activeLink === "TVShow" ? "active" : ""}`}
          onClick={() => handleLinkClick("TVmovies")}
        >
          <Link
            to="/tv-shows"
            style={{
              textDecoration: "none",
              color: "white",
              padding: "10px 10px",
            }}
          >
            TV Shows
          </Link>
        </h4> */}
        {/* <h4
          className={` ${activeLink === "web" ? "active" : ""}`}
          onClick={() => handleLinkClick("web")}
        >
          <Link
            to="/web-series"
            style={{
              textDecoration: "none",
              color: "white",
              padding: "10px 10px",
            }}
          >
            Web Series
          </Link>
        </h4> */}
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
              <Link
                to={`${data[0]}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "10px 10px",
                }}
              >
                {data[1]}
              </Link>
            </h4>
          ))}
        </div>
      )}
      <div className="header2">
        <Link to="/search">
          {!searchActive && (
            <input
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
        <div
          className="slider"
          style={{
            position: "absolute",
            width: "300px",
            height: "95vh",
          }}
          onClick={() => setSlider(!slider)}
        >
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
