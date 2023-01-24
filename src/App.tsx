import React from "react";
import "./App.css";
import Arusa from "./Container/AboutArusa/Arusa";
import ArticleContainer from "./Container/ArticleContainer/ArticleContainer";
import ArticleSofa from "./Container/ArticleSofa/ArticleSofa";
import Detail from "./Container/Detail-Container/Detail";
import Footer from "./Container/FooterContainer/Footer";
import LightChair from "./Container/LightChairContainer/LightChair";
import Lookbook from "./Container/Lookbook-Container/Lookbook";
import NavBar from "./Container/NavBar/NavBar";
import ProductTwo from "./Container/Product-Container2/ProductTwo";
import ProductItemOne from "./Container/Product-Main/ProductItemOne";
import ProductItem from "./Container/ProductItem/ProductItem";
import Promotion from "./Container/Promotion_container/Promotion";
function App() {
  return (
    <div className="Container">
      <div className="main-container">
        <NavBar />
        <Arusa />
        <ProductItem />
        <LightChair />
        <ProductTwo />
        <Lookbook />
        <ProductItemOne />
        <Detail />
        <ArticleSofa />
        <ArticleContainer/>
        <Promotion/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
