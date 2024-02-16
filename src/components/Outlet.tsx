import { useContext } from "react";
import { AppContext } from "../App";
import Home from "./Home";
import Deals from "./Deals";
import Scan from "./Scan";

export default function Outlet() {
  const { view, setView } = useContext(AppContext);

  return (
    <div>
      {view.page === "home" ? (
        <Home />
      ) : view.page === "scan" ? (
        <Scan />
      ) : view.page === "deals" ? (
        <Deals />
      ) : (
        <div></div>
      )}
    </div>
  );
}
