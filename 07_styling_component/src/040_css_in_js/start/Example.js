import { useState } from "react";
import styled from "styled-components"

const StyledButton = styled.button`
  margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background: ${({isSelected}) => isSelected ? "pink" : ""};
`;

const OrangeButton = styled(StyledButton)`
  background-color: orange;

  :hover {
    color: red;
    opacity: 0.7;
  }
  
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>button</StyledButton>
      <OrangeButton onClick={clickHandler}>subbutton</OrangeButton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
