import React from "react";
import "./Home.css";
import { Hero } from "./Hero";
import ShowsSlide from "./ShowsSlide";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const apiUrl = "https://academics.newtonschool.co/api/v1/ott/show";
  const headers = {
    projectId: "62b02tyexb5i",
  };

  // Fetch data from the API on component mount
  useEffect(() => {
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => setApiData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="home">
      {/* Hero section */}
      <Hero />
      <div className="HomeContaint">
        {/* Trending shows */}
        <ShowsSlide
          data={apiData.slice(0, 9)}
          sectionTitle={"Top 9 Trending"}
        />
        {/* Link to a specific video */}
        <NavLink to="/videoplayer/64cffee700bad552e8dcd515">
          <div className="poster">
            <img
              className="poster-images"
              src="https://images.slivcdn.com/videoasset_images/porthozhil_set5_hindimultilang_10aug_web.jpg?h=159&w=1180&q=high&fr=webp"
            ></img>
          </div>
        </NavLink>
        {/* Web Series */}
        <ShowsSlide
          data={apiData
            .filter((item) => item.type === "web series")
            .slice(0, 20)}
          sectionTitle={"Web Series"}
        />
        {/* Trailer section */}
        <ShowsSlide
          data={apiData.filter((item) => item.type === "trailer").slice(0, 20)}
          sectionTitle={"Trailer"}
        />
        <NavLink to="/videoplayer/64cffee700bad552e8dcd515">
          <div className="poster">
            <img
              className="poster-images"
              src="https://images.slivcdn.com/videoasset_images/thefabelmans_web_1259x170_wn.png?h=159&w=1180&q=high&fr=webp"
            ></img>
          </div>
        </NavLink>

        {/* Documentary section */}
        <ShowsSlide
          data={apiData
            .filter((item) => item.type === "documentary")
            .slice(0, 20)}
          sectionTitle={"Documentary"}
        />
      </div>
    </div>
  );
};

export default Home;
