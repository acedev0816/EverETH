import { Row, Col, Image, Button as AButton } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import {
  TotalContainer,
  Content,
  ContentWrapper,
  ImageWrapper,
  WixBgMediaWrapper,
  AboutImage,
  WixBgMedia,
  SvgWrapper
} from "./styles";
const Feature = (props: any) => {
  //anton
  

  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

 

  //end: anton
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <TotalContainer>
      <ImageWrapper>
        <WixBgMediaWrapper style={{ opacity: 1 }}>
          <WixBgMedia
            style={{ transform: "translate3d(0px, 0px, " + props.transform + "px)" }}
          >
            <AboutImage src="img/webp/feature.webp" alt="back.jpg" />
          </WixBgMedia>
        </WixBgMediaWrapper>
      </ImageWrapper>

      <Row justify="space-between" align="middle" id="about">
        <Col lg={14} md={14} sm={16} xs={24}>
          <ContentWrapper>
            <h6>Why Choose EverETH</h6>
            <Row gutter={20}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <SvgWrapper>
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="61 60 78 80" viewBox="61 60 78 80" height="30" width="30" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-k6vfutnky9zc">
                      <g>
                          <path d="M130.4 119.8c-8.2 4.3-19 6.7-30.4 6.7s-22.2-2.4-30.4-6.7c-2.9-1.5-5.4-3.3-7.5-5.2-.7 1.6-1.1 3.2-1.1 4.9 0 11.3 17.5 20.5 39 20.5s39-9.2 39-20.5c0-1.7-.4-3.3-1.1-4.9-2.1 1.9-4.6 3.7-7.5 5.2z" fill="#49589b" data-color="1"></path>
                          <path d="M130.4 100.3c-8.2 4.3-19 6.7-30.4 6.7s-22.2-2.4-30.4-6.7c-2.9-1.5-5.4-3.3-7.5-5.2-.7 1.6-1.1 3.2-1.1 4.9 0 11.3 17.5 20.5 39 20.5s39-9.2 39-20.5c0-1.7-.4-3.3-1.1-4.9-2.1 1.9-4.6 3.7-7.5 5.2z" fill="#49589b" data-color="1"></path>
                          <path d="M100 60c-21.5 0-39 9.2-39 20.5S78.5 101 100 101s39-9.2 39-20.5S121.5 60 100 60zm3.7 29.4v2.7h-7.5v-2.9c-4.3-.8-7.2-2.9-7.2-6V83h8.2c0 .8.7 1.8 3.1 1.8 1.8 0 2-.6 2-.8 0-.3-.4-.7-3.4-1.6-3.5-1.1-9.7-2.9-9.7-6.7 0-2.6 2.8-4.6 7-5.3v-2.8h7.5v2.9c4.1.8 7 3 7 6v.2h-8.2c0-.8-.6-1.8-2.7-1.8-1.6 0-1.8.6-1.8.8 0 .3.5.8 3.2 1.6 2.7.7 10 2.5 10 6.7-.2 2.7-3.2 4.7-7.5 5.4z" fill="#49589b" data-color="1"></path>
                      </g>
                  </svg>
                </SvgWrapper>
                <Content >
                8% Dividends
                </Content>
                <Content >
                  <span> 
                    8% of every buy/sell is taken and redistributed to all holders. Hold EverETH tokens and earn Ethereum. 
                    A Minimum of 200,000 tokens is required in order to receive rewards
                  </span>
                </Content>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <SvgWrapper>
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="42.5 34.502 115 130.998" viewBox="42.5 34.502 115 130.998" height="30" width="30" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--g3jk3e-37vb1z">
                      <g>
                          <path d="M157.5 162.605a2.898 2.898 0 0 1-2.911 2.895H46.836a2.891 2.891 0 0 1-2.911-2.895c0-1.615 1.3-2.951 2.911-2.951h107.753c1.6 0 2.911 1.336 2.911 2.951zM55.385 111.498c.322.167.672.279 1.016.279.128.055.261.055.383.055.922 0 1.805-.446 2.366-1.281l25.808-36.855 17.47 10.578c1.25.724 2.861.446 3.777-.668l31.107-38.692.989 9.408c.144 1.448 1.267 2.506 2.611 2.617.195.055.389.055.589 0 1.605-.167 2.766-1.615 2.594-3.174l-1.75-16.646a2.875 2.875 0 0 0-3.427-2.561l-17.176 3.174a2.968 2.968 0 0 0-2.328 3.451c.295 1.559 1.817 2.616 3.394 2.283l9.588-1.783-29.135 36.243-17.624-10.633c-1.305-.78-3.005-.446-3.883.835l-25.886 36.967-9.076-4.899c-1.411-.724-3.183-.222-3.944 1.225-.761 1.392-.233 3.174 1.183 3.953l11.354 6.124zM86.87 94.739c-1.605 0-2.911 1.336-2.911 2.896v49.66c0 1.558 1.306 2.895 2.911 2.895h26.791c1.611 0 2.911-1.337 2.911-2.895v-49.66c0-1.56-1.3-2.896-2.911-2.896H86.87zm36.707-23.326v75.882c0 1.558 1.305 2.895 2.911 2.895h26.791c1.6 0 2.911-1.337 2.911-2.895V71.413c0-1.615-1.311-2.951-2.911-2.951h-26.791c-1.606 0-2.911 1.337-2.911 2.951zm-76.002 52.499c-1.611 0-2.911 1.336-2.911 2.952v20.432c0 1.558 1.3 2.895 2.911 2.895h26.791c1.6 0 2.911-1.337 2.911-2.895v-20.432c0-1.615-1.311-2.952-2.911-2.952H47.575z" fill="#106f9a" data-color="1"></path>
                      </g>
                  </svg>
                </SvgWrapper>
                <Content >
                Buy Back / Marketing Wallet
                </Content>
                <Content >
                  <span> 
                  Every time the price drops our team will use the buyback wallet to raise and maintain the currency on an upward trend. When is no need for buyback, the funds are being used for marketing
                  </span>
                </Content>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <SvgWrapper>
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="10.001 31.501 179.999 136.999" viewBox="10.001 31.501 179.999 136.999" height="30" width="30" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--r6ddr5s8rytz">
                    <g>
                        <path d="M103.085 135.61v-8.463c5.945-.551 10.276-2.297 12.949-5.33 2.581-3.033 3.871-6.341 3.871-9.833 0-8.179-5.714-13.325-16.82-15.347V78.901c5.115.368 8.617 2.757 10.092 7.26l5.622-1.838c-2.581-6.525-7.926-10.2-15.714-10.936v-6.7h-5.53v6.7c-10.184 1.746-15.253 6.525-15.253 14.52 0 3.033.922 5.789 2.857 8.271 1.935 2.481 6.083 4.503 12.396 6.065v19.206c-5.852-.459-9.815-3.676-12.027-9.465l-5.622 2.206c2.581 7.627 8.479 11.946 17.649 12.957v8.463h5.53zm0-32.172c7.097 1.011 10.691 4.043 10.691 9.098 0 2.389-.922 4.411-2.857 6.157-1.843 1.746-4.516 2.665-7.834 2.757v-18.012zM88.154 87.264c0-2.297.829-4.227 2.581-5.789 1.659-1.562 3.963-2.389 6.82-2.573v17.001c-6.267-1.196-9.401-4.044-9.401-8.639z" fill="#29ABE2" data-color="1"></path>
                        <path d="M61.013 87.18c-1.29-1.011-3.134-.919-4.147.368l-20.83 24.812c-2.581-14.703.276-29.774 8.203-42.915 9.216-15.347 24.331-26.466 41.473-30.51 22.488-5.238 45.989 2.206 61.381 19.574 1.106 1.195 2.949 1.287 4.147.276 1.198-1.103 1.29-2.941.276-4.135-16.774-18.931-42.487-27.109-67.095-21.32-18.617 4.319-35.114 16.449-45.16 33.174-7.373 12.314-10.691 26.098-9.769 39.883l-14.1-21.044c-.922-1.378-2.765-1.746-4.055-.827-1.382.919-1.751 2.665-.829 4.043l21.474 31.98c.553.735 1.382 1.287 2.304 1.287h.184a2.95 2.95 0 0 0 2.212-1.011l24.792-29.499c1.013-1.195.829-3.033-.461-4.136z" fill="#29ABE2" data-color="1"></path>
                        <path d="M189.488 119.06l-21.29-31.704c0-.092-.092-.092-.092-.184l-.092-.092c-.092-.184-.276-.184-.369-.368-.092-.092-.184-.276-.369-.368-.461-.368-1.014-.643-1.567-.643-.922 0-1.843.368-2.396 1.011l-24.7 29.591c-1.014 1.195-.922 3.124.369 4.135 1.198 1.011 3.041.919 4.147-.368l20.552-24.444c2.12 29.223-19.262 58.262-49.307 65.338-21.105 4.962-42.948-1.195-58.431-16.449-1.106-1.103-3.041-1.103-4.147 0s-1.106 3.033 0 4.135c13.087 12.865 30.322 19.85 48.109 19.85 5.253 0 10.507-.643 15.76-1.838 31.151-7.26 53.731-36.299 54.008-66.625l15.023 22.331a2.9 2.9 0 0 0 2.396 1.287c.553 0 1.106-.184 1.659-.459 1.29-1.012 1.659-2.85.737-4.136z" fill="#29ABE2" data-color="1"></path>
                    </g>
                  </svg>
                </SvgWrapper>
                <Content >
                Auto Pay
                </Content>
                <Content >
                  <span> 
                  You don’t need to claim your earned Ethereum. It’s automatically sent to your wallet.
                  Note: in periods of lower volume this may take longer, but you always receive your Ethereum.
                  </span>
                </Content>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <SvgWrapper>
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="43 30 114 139.999" viewBox="43 30 114 139.999" height="30" width="30" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--8xjzea-rm5nqt">
                      <g>
                          <path d="M154.409 50.063l-53-19.809a4.031 4.031 0 0 0-2.818 0l-53 19.809A3.972 3.972 0 0 0 43 53.78V100c0 17.375 9.634 34.96 27.86 50.855 13.481 11.757 26.786 18.444 27.346 18.724a4.038 4.038 0 0 0 3.588-.001c.56-.279 13.864-6.967 27.346-18.724C147.366 134.96 157 117.375 157 100V53.78a3.972 3.972 0 0 0-2.591-3.717zM149 100c0 32.697-39.966 56.55-49 61.522-9.034-4.972-49-28.825-49-61.522V56.529l49-18.314 49 18.314V100z" fill="#000001" data-color="1"></path>
                      </g>
                  </svg>
                </SvgWrapper>
                <Content >
                Secured
                </Content>
                <Content >
                  <span> 
                  The automatic liquidity system helps create a price floor (stability). Initial Liquidity Provided is locked with DXLock. The smart contract was being audited by TechRate, and currently onboarding for Certik Audit with 12 months of SkyNet.
                  Our expereinced marketing team will ensure the continuous growth of the project.
                  </span>
                </Content>
              </Col>
            </Row>
            
          </ContentWrapper>
        </Col>
      </Row>
    </TotalContainer>
  );
};

export default withTranslation()(Feature);
