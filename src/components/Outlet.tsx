import { useContext } from "react";
import { AppContext } from "../App";
import Home from "./Home";
import Deals from "./Deals";
import Order from "./Order";
import Header from "./Header";
import Cart from "./Cart";

export default function Outlet() {
  const { view } = useContext(AppContext);

  return (<>
    <Header />
    <div className="flex-1 overflow-y-auto">
      {view.page === "home" ? (
        <Home />
      ) : view.page === "deals" ? (
        <Deals />
      ) : view.page === "order" ? (
        <Order />
      ) : view.page === "cart" ? (
        <Cart />
      ) : (
        <div>404</div>

      )}
    </div>
    </>);
}
