import styled from "styled-components";

export const IntroductionContainer = styled("section")`
  position: relative;
  padding: 11rem 0rem 8rem 1rem;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
    
  }
  @media screen and (min-width: 1024px){
    video{
      padding-left:20vw;
      margin-top:-100px;
    }
  }
  video{
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
    height: 100%;
    z-index: -1;

  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content:center;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
    button:last-child {
      margin-left:20px;
    }
  }
  @media only screen and (max-width: 575px) {
    button{
      max-width:500px;
    }
  }

  
  
`;
export const WalletWrapper = styled("div")`
  display: flex;
  max-width: 100%;
  margin-top:10px;
  color:white;
  justify-content:center;
  background: #fff2;
  border:1px solid #666;
  padding:10px;
  border-radius:20px;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 575px) {
    font-size:0.6rem;
  }

`;
export const LinkWrapper = styled("div")`
  display: flex;
  max-width: 100%;
  color:white;
  justify-content:space-between;
  padding:5px;
  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button{
    font-family:fantasy;
    font-size: 1.5rem;
    color: white;
  }
  @media only screen and (max-width: 575px) {
    button {
      font-size:1.2rem;
    }
  }

`;

export const ExternalLinkWrapper = styled("div")`
  display: flex;
  max-width: 100%;
  color:white;
  padding:15px;
  border: 1px solid white;
  width: 20%;
`;

export const ExternalWrappers = styled("div")`
  display:flex;
  width:100%;
  @media screen and (min-width: 1024px) {
    margin-top:50vh;
  }
  
`;

export const StickyWrapper = styled("div")`
  position: fixed;
  right: 0;
  top: 40vh;
  margin-right:20px;
  color:white;
  display:flex;
  flex-direction: column;
  img{
    width:30px;
    height:30px;
    margin-top:7px;

  }
  z-index:1000;
  `;