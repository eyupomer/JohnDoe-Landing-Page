import Blog from "../components/Blog";
import ComponentBtn from "../components/ComponentBtn";
import Contact from "../components/Contact";
import DarkSection from "../components/DarkSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HireMe from "../components/HireMe";
import MyPortfolio from "../components/MyPortfolio";
import MyServices from "../components/MyServices";
import Nav from "../components/Nav";
import PacksPricing from "../components/PacksPricing";
import Resume from "../components/Resume";
import WhoAmI from "../components/WhoAmI";

const LandingPage = () => {
  return (
    <div  data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
      <ComponentBtn/>
      <Header/>
      <Nav/>
      <WhoAmI/>
      <Resume/>
      <DarkSection/>
      <MyServices/>
      <PacksPricing/>
      <HireMe/>
      <MyPortfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default LandingPage