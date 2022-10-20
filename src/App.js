import React from "react";
import Article from "./Components/aritcle/Article";
import Brand from "./Components/brand/Brand";
import Cta from "./Components/cta/Cta";
import Feature from "./Components/feature/Feature";
import Navbar from "./Components/navbar/Navbar";
import Header from "./Containers/header/Header"
import WhatGPT3 from "./Containers/whatGPT3/WhatGPT3"
import Possibility from "./Containers/possibility/Possibility"
import Blog from "./Containers/blog/Blog"
import Footer from './Containers/footer/Footer'
import "./App.css"
import Featuress from "./Containers/featuress/Featuress";

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand/>
        <WhatGPT3 />
        {/* <Featuress /> */}
        {/* <Feature /> */}
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  );
};

export default App;
