import React, { createContext, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Watchlist from "./components/WatchList";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import WebSeries from "./components/WebSeries";
import Subscription from "./components/Subscription";
import VideoPlayer from "./components/VideoPlayer";
import SignUp from "./components/SignUp";
import Search from "./components/Search";
import PasswordUpdateForm from "./components/PasswordUpdateForm";
import SortFilm from "./components/SortFilm";
import ShowDetails from "./components/newData/ShowDetails";
// import Home from "./Home"; // Import your Home component
// import Subscription from "./Subscription"; // Import your Subscription component
// import Movies from "./Movies"; // Import your Movies component
// import TVShows from "./TVShows"; // Import your TVShows component
// import WebSeries from "./WebSeries"; // Import your WebSeries component
export const MyContext = createContext("");
function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [slider, setSlider] = useState(false);
  const [newFile, setNewFile] = useState("");
  const [activeLink, setActiveLink] = useState("Home");
  const [login, setLogin] = useState(false);
  const [searchVAlue, setSearchVAlue] = useState("");
  const [searchActive, setSeaarchActive] = useState(false);
  const [fetchedFirestoreData, setfetchedFirestoreData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const inputRef = useRef("null");
  // Define the context value as an object
  const contextValue = {
    globalData,
    setGlobalData,
    inputRef,
    videoUrl,
    setVideoUrl,
    slider,
    setSlider,
    setNewFile,
    newFile,
    activeLink,
    setActiveLink,
    login,
    setLogin,
    searchVAlue,
    setSearchVAlue,
    searchActive,
    setSeaarchActive,
    fetchedFirestoreData,
    setfetchedFirestoreData,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Watchlist" element={<Watchlist />} />

        <Route path="/web-series" element={<WebSeries />} />
        <Route path="/play/:id" element={<VideoPlayer />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SortFilm" element={<SortFilm />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/ShowDetails/:id" element={<ShowDetails />} />
        <Route path="/PasswordUpdateForm" element={<PasswordUpdateForm />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
