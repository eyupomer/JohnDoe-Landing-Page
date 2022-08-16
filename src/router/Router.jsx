import { BrowserRouter, Route, Routes } from "react-router-dom";
import Components from "../pages/Components";
import LandingPage from "../pages/LandingPage";

const Router = () => {
  return ( 
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/components" element={<Components/>} />
    </Routes>
  </BrowserRouter>
  )
};

export default Router;
