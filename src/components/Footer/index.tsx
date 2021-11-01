import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  Para,
  EmailWrapper,
} from "./styles";
import { Button } from "../../common/Button";
interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={8} md={8} sm={12} xs={24}>
              <Title>{t("Contact")}</Title>
              <Para>
                support@evereth.net
              </Para>
              <Button color="#424757" fixedWidth={true}>Whitepaper</Button>
              <Para>
                © 2021 by EverETH.
              </Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <Title>{t("Subscribe to our newsletter")}</Title>
              <Para>
                Be the first to hear the news about EverETH
              </Para>
              <Para>
                *Email
              </Para>
              <EmailWrapper>
                <input />
                <Button color="#424757" fixedWidth={true}>Submit</Button>
              </EmailWrapper>

            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Follow us on")}</Title>
              <Para>
                Telegram
              </Para>
              <Para>
                Twitter
              </Para>
              <Para>
                Discord
              </Para>
              <Para>
                Facebook
              </Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
