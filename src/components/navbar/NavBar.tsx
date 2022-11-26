import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase-config";
import { themeColors } from "../../theme/theme";

const NavBar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  function handleLogOut() {
    try {
      auth.signOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <NavBarStyled>
      <p>{currentUser.displayName}</p>
      <button onClick={handleLogOut}>se déconnecter</button>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.header`
  padding: 10px 20px 10px 20px;
  background-color: ${themeColors.primaryColor};
  border-radius: 12px;
  border: 0.5px solid black;
  position: fixed;
  top: 20px;
  left: 20px;

  p {
    margin: 0;
    font-size: 22px;
    font-weight: bold;
    margin-left: 5px;
    text-transform: capitalize;
  }

  button {
    padding: 3px 10px 3px 10px;
    background-color: ${themeColors.fond};
    border: 0.5px solid black;
    border-radius: 30px;
    cursor: pointer;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
`;

export default NavBar;
