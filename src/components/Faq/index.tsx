import { Row, Col, Collapse } from "antd";
import { withTranslation } from "react-i18next";
import {
  TotalContainer,
  ContentWrapper,
  ImageWrapper,
  WixBgMediaWrapper,
  AboutImage,
  WixBgMedia,
} from "./styles";
const { Panel } = Collapse;
const Faq = (props: any) => {
  //anton

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
            style={{
              transform: "translate3d(" + (props.transform - 100) +  "px, 0px, 0px)",
            }}
          >
            <AboutImage src="img/webp/faq.webp" alt="back.jpg" />
          </WixBgMedia>
        </WixBgMediaWrapper>
      </ImageWrapper>

      <Row justify="space-between" align="middle" id="about">
        <Col lg={12} md={12} sm={12} xs={24}>
          <ContentWrapper>
            <h6>FAQ</h6>
            <Collapse defaultActiveKey={["1"]}>
              <Panel
                header="Is EverETH on Binance Smart Chain or Ethereum network?"
                key="1"
              >
                <p>
                  The smaller fees always win. EverETH is on Binance Smart
                  Chain.
                </p>
              </Panel>
              <Panel header="When will I receive my Ethereum diviends?" key="2">
                <p>
                  Our unique reward system is triggered by volume (buy + sell
                  activity to cover gas fees). Payouts to holders may not occur
                  every 30 minutes if the trading volume is low. When this is
                  the case, the amount of rewarded Ethereum each holder will
                  receive does not decrease. However, will accrue over a longer
                  period of time until it is suitable for a payout to trigger
                  (usually between 1-2 hours).
                </p>
              </Panel>
              <Panel header="When to check how much I earned?" key="3">
                <p>
                  Our developers created the EverETH dashboard where you can
                  check your earnings live. Go to : https://EverETH.app Connect
                  your wallet, or paste your wallet address. However there is
                  another way to check your Ethereum balance: You simply need to
                  add the custom token Binance-Peg Ethereum BEP20 to your
                  wallet.
                </p>
              </Panel>
              <Panel header="How do I get in touch with the team?" key="4">
                <p>
                  The best way to contact the team is through our Telegram. We
                  are always available to help you!
                </p>
              </Panel>
            </Collapse>
            ,
          </ContentWrapper>
        </Col>
      </Row>
    </TotalContainer>
  );
};

export default withTranslation()(Faq);
