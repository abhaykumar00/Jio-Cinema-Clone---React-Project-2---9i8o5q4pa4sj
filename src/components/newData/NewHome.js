import React, { useEffect } from "react";

import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Binge from "./Binge";
import Trending from "./Trending";
import Sports from "./Sports";

const NewHome = () => {
  return (
    <div>
      {/* <MovieData show={show} first={0} last={10}/> */}

      <Container>
        <ImageSlider />
        <Trending />
        <Binge />
        <Sports />
      </Container>
    </div>
  );
};

const Container = styled.main`
  position: relative;
  top: 72px;
  overflow-x: hidden;
  display: block;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  font-size: 30px;
`;

export default NewHome;
