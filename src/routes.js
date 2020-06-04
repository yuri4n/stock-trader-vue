import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Stocks from "./components/stocks/Stocks";

export const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/stocks", component: Stocks }
];
