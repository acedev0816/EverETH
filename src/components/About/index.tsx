import { Row, Col, Image, Button as AButton } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Fade } from "react-awesome-reveal";
import {useState, useEffect} from "react";
import {
  AboutContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  ImageWrapper,
  WixBgMediaWrapper,
  AboutImage,
  WixBgMedia,
} from "./styles";

const About = (props:any) => {
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
    <AboutContainer>
      <ImageWrapper>
        <WixBgMediaWrapper style={{ opacity: 1 }}>
          <WixBgMedia style={{transform: "translate3d(0px, 0px, " + props.transform + "px)"}}>
              <AboutImage src="img/webp/about.webp" alt="back.jpg"/>
          </WixBgMedia>
        </WixBgMediaWrapper>
      </ImageWrapper>

        <Row justify="space-between" align="middle" id="about">
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>
                How It Works
              </h6>
              <Content style={{ color: "white" }}>
                EverETH is the first Ethereum reflection token running on Binance Smart Chain. Simply hold tokens and get rewarded in Ethereum on every transaction.
                With the auto-claim feature, you will receive ETH automatically in your wallet.
              </Content>
              <Content style={{ color: "white" }}>
                Tax distribution: 8% Holders, 5% BuyBack, 2% Liquidity
              </Content>
              <ButtonWrapper>
                <Button color="#567c6d" fixedWidth={true}>Whitepaper</Button>
                <Button color="#363c4d" fixedWidth={true}>
                  Source Code
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Row>
    </AboutContainer>
  );
};

export default withTranslation()(About);
