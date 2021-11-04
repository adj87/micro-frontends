import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
export default () => (
  <BrowserRouter>
    <Header/>
    <MarketingApp />
  </BrowserRouter>
);
