import styled from "styled-components";

export const AboutContainer = styled("section")`
  position: relative;
  padding: 1rem 0 8rem;
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
  justify-content:center;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
    button:last-child{
      margin-left:20px;
    }
  }
  @media only screen and (max-width: 575px) {
  flex-wrap: wrap;

    button{
      max-width:500px;
      
    }
  }

  
  
`;
export const BackWrapper = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  img{
  }
  `;

//anton
export const ImageWrapper = styled("div")`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
`;

export const WixBgMedia = styled("div")`
    width: 100%;
    height: 712px;
    left: 0px;
    top: 0px;
`;

export const WixBgMediaWrapper = styled("div")`
  perspective-origin: 50% 356px;
  perspective: 100px;
  opacity: 1;
  visibility: inherit;
  transform: translate3d(0px, 0px, 0px);
`;

export const AboutImage = styled("img")`
  width: 100%;
  height: 712px;
  object-fit: cover;
  object-position: 50% 50%;
`;