import React from "react";
import styled from "styled-components";
import ColumnEditor from "../components/ColumnEditor";

const ColumnWrite = () => {
  return (
    <div>
      <ColumnEditor />
      <ColumnPost>등록</ColumnPost>
    </div>
  );
};

export default ColumnWrite;

const ColumnPost = styled.button`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  float: right;
  overflow-y: scroll;
`;
