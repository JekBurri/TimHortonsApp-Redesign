import { useContext } from "react";
import { AppContext } from "../App";
import Header from "./Header";

export default function Checkout() {
  const { view, setView } = useContext(AppContext);

  return (
    <div className="container mx-auto bg-timHortonsBrown">
      <Header />

      <div className="text-center p-10">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <h2 className="text-lg mb-2">Your order details:</h2>

        <ul className="list-disc pl-6">
          {view.cart.map((item: any) => (
            <li key={item.item} className="mb-2">
              {item.item} x {item.count} - ${item.price * item.count.toFixed(2)}
            </li>
          ))}
        </ul>

        <p className="mt-4">Total: ${view.cart.reduce((total: any, item: any) => total + item.price * item.count, 0).toFixed(2)}</p>

        <textarea
          className="mt-4 p-2 w-full rounded-md placeholder-timHortonsBrown bg-white"
          placeholder="Special requests?"
        ></textarea>

        <button
          onClick={() => setView((prevView: any) => ({ ...prevView, page: "home" }))}
          className="mt-6 bg-timHortonsRed hover:bg-timHortonsRedDark text-2xl py-3 px-6 rounded-md font-bold"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
