import { useContext } from "react";
import { AppContext } from "../App";
import Home from "./Home";
import Deals from "./Deals";
import Scan from "./Scan";
import Order from "./Order";

export default function Outlet() {
  const { view, setView } = useContext(AppContext);

  return (
    <div className="flex-1">
      {view.page === "home" ? (
        <Home />
      ) : view.page === "scan" ? (
        <Scan />
      ) : view.page === "deals" ? (
        <Deals />
      ) : view.page === "order" ? (
        <Order />
      ) : (
        <div></div>
      )}
    </div>
  );
}
