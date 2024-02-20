import { useContext } from "react";
import Header from "./Header";
import QRCode from "./QRCode";
import { AppContext } from "../App";

export default function Home() {
  const { view, setView } = useContext(AppContext);

  return (
    <div className="container">
      {/* Added container class */}
      <Header />
      <div className="flex justify-center">
        <QRCode />
      </div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() =>
            setView((prevView:any) => ({ ...prevView, page: "deals" }))
          }
          className="rounded-lg p-4 text-2xl red-espresso text-white font-bold"
        >
          Offers
        </button>
        <button
          onClick={() =>
            setView((prevView:any) => ({ ...prevView, page: "order" }))
          }
          className="rounded-lg p-4 text-2xl red-espresso text-white font-bold"
        >
          Order
        </button>
      </div>
    </div>
  );
}
