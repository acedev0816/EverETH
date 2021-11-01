import { Row, Col, Image, Button as AButton } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Fade } from "react-awesome-reveal";
import IntroContent from "../../content/IntroContent.json";
import {
  IntroductionContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  WalletWrapper,
  LinkWrapper,
  ExternalLinkWrapper,
  ExternalWrappers,
  StickyWrapper,
} from "./styles";

const Introduction = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <IntroductionContainer>
      <Fade duration={2000} direction="left">
        <Row justify="space-between" align="middle" id="intro">
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6 style={{ color: "white" }}>{IntroContent.title}</h6>
              <Content style={{ color: "white" }}>{IntroContent.text}</Content>
              <ButtonWrapper>
                <Button fixedWidth={true}>Buy on EverETH Swap</Button>
                <Button color="#188ba3" fixedWidth={true}>
                  Dashboard
                </Button>
              </ButtonWrapper>
              <WalletWrapper>
                <span>0x16dCc0eC78E91e868DCa64bE86aeC62bf7C61037</span>
              </WalletWrapper>
              <LinkWrapper>
                <AButton type="link">BloomBerg</AButton>
                <AButton type="link">yahoo!</AButton>
                <AButton type="link" style={{ fontStyle: "italic" }}>
                  BENZINGA
                </AButton>
              </LinkWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
      <Row>
        <ExternalWrappers>
          <ExternalLinkWrapper>
            <Image src="img/webp/bsc.webp" preview={false} />
          </ExternalLinkWrapper>
          <ExternalLinkWrapper>
            <Image src="img/webp/certic.webp" preview={false} />
          </ExternalLinkWrapper>
          <ExternalLinkWrapper>
            <Image src="img/webp/coingecko.webp" preview={false} />
          </ExternalLinkWrapper>
          <ExternalLinkWrapper>
            <Image src="img/webp/coinmarketcap.webp" preview={false} />
          </ExternalLinkWrapper>
          <ExternalLinkWrapper>
            <Image
              src="img/webp/github.webp"
              preview={false}
              style={{ filter: "invert(1)" }}
            />
          </ExternalLinkWrapper>
        </ExternalWrappers>
      </Row>
      <video autoPlay muted loop id="introVideo">
        <source src="img/back.mp4" type="video/mp4" />
      </video>
      <StickyWrapper>
        <Image
          src="img/webp/telegram.webp"
          preview={false}
          style={{ filter: "invert(1)" }}
        />
        <Image
          src="img/webp/discord.webp"
          preview={false}
          style={{ filter: "invert(1)" }}
        />
        <Image
          src="img/webp/facebook.webp"
          preview={false}
          style={{ filter: "invert(1)" }}
        />
        <Image
          src="img/webp/twitter.webp"
          preview={false}
          style={{ filter: "invert(1)" }}
        />
      </StickyWrapper>
    </IntroductionContainer>
  );
};

export default withTranslation()(Introduction);
