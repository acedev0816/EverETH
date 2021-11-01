import { lazy, useState, useEffect } from "react";

import Introduction from "../../components/Introduction";
import About from "../../components/About";
import HowToBuy from "../../components/HowToBuy";
import Feature from "../../components/Feature";
import RoadMap from "../../components/RoadMap";
import Faq from "../../components/Faq";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const aboutPosition = 600;
const featurePosition = 1700;
const roadMapPosition = 2800;

const Home = () => {
  const [aboutTransform, setAboutTransform] = useState(0);
  const [featureTransform, setFeatureTransform] = useState(0);
  const [roadMapTransform, setRoadMapTransform] = useState(-700);
  const [faqTransform, setFaqTransform] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      console.log(window.pageYOffset);
      let itemTranslate = Math.max(0, (window.pageYOffset - aboutPosition) / 20);
      itemTranslate = Math.min(70, itemTranslate);
      setAboutTransform(itemTranslate);
      itemTranslate = Math.max(0, (window.pageYOffset - featurePosition) / 20);
      itemTranslate = Math.min(40, itemTranslate);
      setFeatureTransform(itemTranslate);
      itemTranslate = Math.max( -700, (window.pageYOffset - roadMapPosition ));
      itemTranslate = Math.min(700, itemTranslate);
      setRoadMapTransform(itemTranslate);

      
    };
  }, []);

  return (
    <Container>
      <ScrollToTop />
      <Introduction />
      <About transform={aboutTransform}/>
      <Feature transform={featureTransform}/>
      <RoadMap transform={roadMapTransform}/>
      <Faq transform={faqTransform}/>
      <HowToBuy />
    </Container>
  );
};

export default Home;
