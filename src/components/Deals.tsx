import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function Deals() {
  const {view, setView} = useContext(AppContext);
  const [activeDeal, setActiveDeal] = useState(null);

  const handleActivateDeal = (dealName:any) => {
    setActiveDeal(dealName === activeDeal ? null : dealName);
    setView((prevView: any) => ({ ...prevView, activeDeal: dealName }));

  };

  const isDealActive = (dealName:any) => view.activeDeal === dealName;

  return (
    <div className="container mx-auto">
      <div className="mt-8 p-10">
        <h1 className="text-3xl font-bold mb-4">Deals</h1>
        <div className="flex flex-col gap-4">
          {/* First Deal Card */}
          <div
            className={`relative bg-white p-4 rounded-md shadow-md flex-1 ${
              isDealActive("Buy 1 Get 1 Free")
                ? "border-4 border-green-500"
                : ""
            }`}
            onClick={() => handleActivateDeal("Buy 1 Get 1 Free")}
          >
            <h2 className="text-xl font-bold">Buy 1 Get 1 Free</h2>
            <p>Buy 1 get 1 free on all drinks</p>
            <div
              className={`absolute top-0 right-0 text-white px-2 rounded-bl-md ${
                isDealActive("Buy 1 Get 1 Free")
                  ? "bg-green-500"
                  : "red-espresso"
              }`}
            >
              {isDealActive("Buy 1 Get 1 Free")
                ? "Activated"
                : "Press to Activate"}
            </div>
          </div>

          {/* Second Deal Card */}
          <div
            className={`relative bg-white p-4 rounded-md shadow-md flex-1 ${
              isDealActive("50% off") ? "border-4 border-green-500" : ""
            }`}
            onClick={() => handleActivateDeal("50% off")}
          >
            <h2 className="text-xl font-bold">50% off</h2>
            <p>50% off on all food items</p>
            <div
              className={`absolute top-0 right-0 text-white px-2 rounded-bl-md ${
                isDealActive("50% off")
                  ? "bg-green-500"
                  : "red-espresso"
              }`}
            >
              {isDealActive("50% off") ? "Activated" : "Press to Activate"}
            </div>
          </div>
        </div>
        <button
            onClick={() => setView((prevView: any) => ({ ...prevView, page: "home" }))}
            className="rounded-lg mt-4 p-2 text-2xl red-espresso text-white font-bold"
          >
            Go Back
          </button>
      </div>
    </div>
  );
}
