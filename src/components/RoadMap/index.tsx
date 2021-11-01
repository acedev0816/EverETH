import { Row, Col, Image, Button as AButton } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import {
  TotalContainer,
  ContentWrapper,
  ImageWrapper,
  WixBgMediaWrapper,
  AboutImage,
  WixBgMedia,
  Phase,
} from "./styles";
const RoadMap = (props: any) => {
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
            style={{ transform: "translate3d(0px, " + props.transform + "px, 0px)" }}
          >
            <AboutImage src="img/webp/roadmap.webp" alt="back.jpg" />
          </WixBgMedia>
        </WixBgMediaWrapper>
      </ImageWrapper>

      <Row justify="space-between" align="middle" id="about">
        <Col lg={14} md={14} sm={16} xs={24}>
          <ContentWrapper>
            <h6>Roadmap</h6>
            <Row gutter={20}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Phase >
                  <span > PHASE </span>
                  <h5> 01 </h5>
                  <div className="bar"/>
                  <ul>
                    <li className="checked"> Design and strucutre</li>
                    <li className="checked"> Website launch</li>
                    <li className="checked"> Public presale</li>
                    <li className="checked"> Marketing campaign</li>
                    <li className="checked"> CoinGecko Listing</li>
                    <li className="checked"> CoinMarketCapListing Listing</li>
                    <li className="checked"> Smart Contract Audit</li>
                  </ul>
                </Phase>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col lg={12} md={12} sm={12} xs={0}>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Phase >
                  <span > PHASE </span>
                  <h5> 02 </h5>
                  <div className="bar"/>
                  <ul>
                    <li className="checked"> Diviend tracker dashboard</li>
                    <li className="checked"> EverETH Swap</li>
                    <li > Partnerships</li>
                    <li > Buy EverETH via credit card</li>
                    <li > Merchandising</li>
                  </ul>
                </Phase>
              </Col>
            </Row>


            <Row gutter={20}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Phase >
                  <span > PHASE </span>
                  <h5> 03 </h5>
                  <div className="bar"/>
                  <ul>
                    <li > CEX Listing</li>
                    <li > NFT Collection</li>
                    <li > Expanding Community</li>
                    <li > Charity Events</li>
                    <li > EverETH Wallet</li>
                    <li > Ecosystem Development</li>
                  </ul>
                </Phase>
              </Col>
            </Row>
            
          </ContentWrapper>
        </Col>
      </Row>
    </TotalContainer>
  );
};

export default withTranslation()(RoadMap);
