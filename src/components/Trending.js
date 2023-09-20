import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <Container>
      <h4>Latest & Trending</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="/images/jawaan.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/avengers.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/avengers.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/avengers.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/avengers.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/avengers.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/avengers.jpg" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 40px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 15px;
  padding-top: 15px;
  grid-template-columns: repeat(7, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 70px;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  height: 300px;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
    overflow: hidden;
  }

  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Trending;
