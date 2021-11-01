import styled from "styled-components";

export const HowToBuyContainer = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
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
  .bottom{
    color:white;
    font-size:0.8rem;
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
  h6{
    color:white;
    background: #4b3863;
    font-size:1.5rem;
    max-width:250px;
    padding:10px 20px;
    text-align: center;
    border-radius: 0px 0px 10px 10px;


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
    button:last-child{
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
  background: #fff3;
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
  margin-right:20px;
  top: 40vh;
  color:white;
  display:flex;
  flex-direction: column;
  img{
    width:30px;
    height:30px;
  }
  `;