import Blog from "./components/Blog";
import Contact from "./components/Contact";
import DarkSection from "./components/DarkSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HireMe from "./components/HireMe";
import MyPortfolio from "./components/MyPortfolio";
import MyServices from "./components/MyServices";
import Nav from "./components/Nav";
import PacksPricing from "./components/PacksPricing";
import Resume from "./components/Resume";
import WhoAmI from "./components/WhoAmI";
// import "./scss/johndoe.scss";

function App() {
  return (
    <div  data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
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
  );
}

export default App;
