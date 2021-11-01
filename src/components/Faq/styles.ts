import styled from "styled-components";

export const TotalContainer = styled("section")`
  position: relative;
  padding: 8rem 0 8rem 1rem;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
    
  }
  .ant-collapse{
    border:none;
    background:transparent;
  }
  .ant-collapse-header{
    color:white!important;
    font-size:0.8rem;
    font-weight: bold;
    background: transparent;

  }
  .ant-collapse-content{
    background: transparent;
    border-color:#444;
  }
  .ant-collapse-content-box p {
    background: transparent;
    font-size:0.8rem;

    color:white;
  }
  .ant-collapse-item{
    border-color: #444;
  }



`;

export const ContentWrapper = styled("div")`
  position: relative;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
  h6{
    color:white;
    font-size:2rem;
    margin-bottom:20px;
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
  height: 90%;

  object-fit: fill;
  object-position: 50% 50%;
`;