// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuyIcon from "@material-ui/icons/AddShoppingCart";
import SellIcon from "@material-ui/icons/AttachMoney";
import MarketIcon from "@material-ui/icons/ShoppingBasket";
import Timeline from "@material-ui/icons/Timeline";
import DateRange from "@material-ui/icons/DateRange";
import Setting from "@material-ui/icons/Settings";
import LocationSearch from "@material-ui/icons/LocationSearching"
import React from "react";
// import pagesRoutes from "./pages.jsx";
// var pages = pagesRoutes
// todo port over component pages
const Market = () =>{}
const Holding = () =>{}
export const  adminRoutes = {
  collapse: true,
  path: "/settings",
  name: "Settings",
  state: "openSettings",
  icon: Setting,
  views: [
    {
      path: "/Settings/General",
      name: "General",
    },
    {
      path: "/Settings/GlobalTrade",
      name: "Global Trade",
    },
    {
      path: "/Settings/BuyStrategies",
      name: "Buy Strategies",
    },
    {
      path: "/Settings/DCAStrategies",
      name: "DCA Strategies",
    },
    {
      path: "/Settings/SellStrategies",
      name: "Sell Strategies",
    },

    {
      path: "/pairSettings",
      name: "Pair Specific Settings",
    },
    {
      path: "/users",
      name: "User Management",
    },
  ]
};
var dashRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: DashboardIcon,
  },
  { path: "/market", name: "Market", icon: MarketIcon, component: Market },
  { path: "/holding", name: "Holding", icon: Timeline, component: Holding },

  {
    path: "/buys",
    name: "Buy Log",
    icon: BuyIcon,
  },

  {
    path: "/sales",
    name: "Sales Log",
    icon: SellIcon,
  },
  {
    path: "/buyAnalyzer",
    name: "Buy Analyzer",
    icon: LocationSearch,
  },
  {
    path: "/sellAnalyzer",
    name: "Sell Analyzer",
    icon: LocationSearch,
  },
  {
    path: "/dcaAnalyzer",
    name: "DCA Analyzer",
    icon: LocationSearch,
  },
  // { path: "/calendar", name: "Analyzer", icon: DateRange, component: Holding },

  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
