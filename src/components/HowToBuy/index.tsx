import { Row, Col, Image, Button as AButton } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Fade } from "react-awesome-reveal";
import { HowToBuyContainer, Content, ContentWrapper } from "./styles";

const HowToBuy = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <HowToBuyContainer>
      <Row justify="space-between" align="middle" id="howtobuy">
        <Col lg={11} md={11} sm={11} xs={24}>
          <ContentWrapper>
            <h6>How To Buy</h6>
            <Content style={{ color: "white" }}>
              Here is a quick guide on how to buy EverETH using Trustwallet:
            </Content>
            <Content style={{ color: "white" }}>
              Download the Trustwallet App from your OS Store Buy BNBs on an
              Exchange of your choice (Ex. Binance) Go to the dApp section and
              select Pancakeswap Swap your BNBs for EverETH (EverETH) by using
              our contract address.
            </Content>
          </ContentWrapper>
        </Col>
        <Col md={24}>
          <p className="bottom">
            The Content shared on this website is for information purpose only
            and, thus, should not be considered as financial advice.
            Trading/Investing is risky and you should never invest more than you
            can afford to lose. Cryptocurrencies are risky. Never invest more
            than you can afford to lose. You alone assume the sole
            responsibility of evaluating the merits and risks associated with
            the use of any information or other Content on the Site before
            making any decisions based on such information or other Content.
          </p>
        </Col>
      </Row>
    </HowToBuyContainer>
  );
};

export default withTranslation()(HowToBuy);
