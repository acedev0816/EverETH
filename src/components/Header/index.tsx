import { useState } from "react";
import { Row, Col, Drawer, Image, Typography } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  MenuWrapper,
  Label,
  Outline,
  Span,
} from "./styles";

const { Title } = Typography;

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <MenuWrapper>
          <CustomNavLinkSmall onClick={() => scrollTo("about")}>
            <Span>{t("About")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
            <Span>{t("Features")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => scrollTo("product")}>
            <Span>{t("RoadMap")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => scrollTo("product")}>
            <Span>{t("Contact")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => scrollTo("product")}>
            <Span>{t("FAQ")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => scrollTo("product")}>
            <Span>{t("Audit")}</Span>
          </CustomNavLinkSmall>
        </MenuWrapper>
        <CustomNavLinkSmall
          style={{ width: "150px", marginTop:"0px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button color="#188ba3">{t("EverETH.app")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Image src="img/logo.png" preview={false} />
            <div>
              <Title level={4} >EverETH</Title>
              <Title level={5}>Earn Ethereum</Title>
            </div>
          </LogoContainer>
          <NotHidden>
            <MenuItem/>
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
