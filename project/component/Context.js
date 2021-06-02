import React from "react";
import styled from "styled-components";

const contextView = styled.view`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

const Context = (props) => {
  return (
    <contextView>
      <div>여기는 게시물 입니다</div>
    </contextView>
  );
};

export default Context;
