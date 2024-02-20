import { useContext } from "react";
import { AppContext } from "../App";
import Home from "./Home";
import Deals from "./Deals";
import Scan from "./Scan";
import Order from "./Order";
import Checkout from "./Checkout";
import Cart from "./Cart";

export default function Outlet() {
  const { view, setView } = useContext(AppContext);

  return (
    <div className="flex-1 overflow-y-auto">
      {view.page === "home" ? (
        <Home />
      ) : view.page === "scan" ? (
        <Scan />
      ) : view.page === "deals" ? (
        <Deals />
      ) : view.page === "order" ? (
        <Order />
      ) : view.page === "checkout" ? (
        <Checkout />
      ) : view.page === "cart" ? (
        <Cart />
      ) : (
        <div>404</div>
      )}
    </div>
  );
}