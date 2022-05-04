/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { styled } from "@mui/system";
import { Paper, TextField, Box } from "@mui/material";
import LateralItem from "../Navbar/LateralMenu/LateralItem";
import { Link } from "react-router-dom";
/*--------------------------------------------------------*/

export const LateralItemStyled = styled(LateralItem)`
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

export const LinkDom = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
`;

export const Div = styled("div")(`
    width: 100%;
    height:auto;
    `);

export const TituloForo = styled("span")(`
text-shadow: 4px 4px 4px rgb(255,255,0);
border-bottom:10px solid rgb(255,255,0);
`);

export const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1em 1em 1em 1em;
`;
export const StyledTextField = styled(TextField)`
  margin: 1em;
  width: 100%;
  text-align: center;
  padding-right: 16px;
`;



// --------------> STYLED EDIT PROFILE

export const BoxStyledEditProfile = styled(Box)`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height:auto;
    background-color: black;
    border: 2px solid black;
    box-shadow: 1px 1px 20px black;
    padding: 4px;
    color:white
`;

export const Img = styled("img")`
  width:100%;
  height:auto;
  object-fit:cover;
`;
//-----------------------//




export const StyledButton = styled("div")(`
    width: 7vw;
    height: 5vh;
    `);
