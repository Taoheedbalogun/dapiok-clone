import React from "react";
import styled from "styled-components";
import image from "../Assets/mainshot.png";

const Second = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={image} />
      </Wrapper>
    </Container>
  );
};

export default Second;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #060606;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Image = styled.img`
  width: 900px;
  height: 600x;
  object-fit: contain;
  box-shadow: 0px 0px 50px 0px rgb(91, 119, 211);

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
    background-color: red;
    object-fit: cover;
  }
`;
