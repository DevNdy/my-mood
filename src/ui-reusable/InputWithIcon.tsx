import React from "react";
import styled from "styled-components";
import { themeColors } from "../theme/theme";

interface InputProps {
  icon: any;
  type: string;
  txtPlaceHolder: string;
  reference: React.LegacyRef<HTMLInputElement>;
}

const InputWithIcon = ({ icon, type, txtPlaceHolder, reference }: InputProps) => {
  return (
    <InputWithIconStyled>
      {icon}
      <input type={type} ref={reference} placeholder={txtPlaceHolder} required />
    </InputWithIconStyled>
  );
};

const InputWithIconStyled = styled.div`
  height: 25px;
  width: 210px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-bottom: 0.5px solid black;
  margin-top: 15px;

  i {
    color: gray;
    margin-right: 10px;
  }

  input {
    width: 100%;
    border: none;
    &:focus {
      outline-color: ${themeColors.fond};
    }
  }
`;

export default InputWithIcon;
