import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background:#242834;
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 16px;
  text-transform: capitalize;
  color: white;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Para = styled("div")`
  color: #cccccc;
  font-size: 14px;
  width: 70%;
  margin:10px 10px;
`;

export const EmailWrapper = styled("div")`
  display:flex;

  input{ 
    border: 1px solid red;
    border-radius:30px;
    background: transparent;
    width:80%;
    max-width:300px;
    height:40px;
  }
  button{
    margin:0px;
    margin-left:-100px;
    max-width:100px;
  }
`;
