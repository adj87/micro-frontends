import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";
console.log("mountttt", mount);
export default () => (
  <h1>
    Hi there!
    <MarketingApp />
  </h1>
);
