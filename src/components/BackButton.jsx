import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledBackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #e8344e;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d62839;
  }
`;

function BackButton() {
  const navigate = useNavigate();

  return (
    <StyledBackButton onClick={() => navigate(-1)}>돌아가기</StyledBackButton>
  );
}

export default BackButton;
