import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";
import { Header } from "./components/Header";
import Identify from "./components/Identify";
import ModalSection from "./components/ModalSection";
import OurPlatform from "./components/OurPlatform";
import OurApproch from "./components/OurApproch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GridSection from "../src/components/GridSection";
import SectionFive from "../src/components/SectionFive";
import Deals from "./components/Deals";
import SeeWhat from "./components/SeeWhat";
import Target from "./components/Target";
import ContactUs from "./components/ContactUs";
import Started from "./components/Started";
import Preloader from "./components/Preloader";
import TopToBottom from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Preloader />
        <MyNav />
        <Header />
        <Identify />
        <ModalSection />
        <OurPlatform />
        <OurApproch />
        <Deals />
        <Started />
        <SeeWhat />
        <Target />
        <ContactUs />
        <TopToBottom />
      </div>
    </>
  );
}

export default App;
