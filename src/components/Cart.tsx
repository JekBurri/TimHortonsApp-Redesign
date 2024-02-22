import { useContext } from "react";
import { AppContext } from "../App";
import Header from "./Header";

export default function Cart() {
  const { view, setView } = useContext(AppContext);
  const { cart } = view;

  const calculateTotal = () => {
    return cart.reduce((total:any, item:any) => total + item.price * item.count, 0);
  };

  const applyPromotion = (total:any) => {
    const activeDeal = view.activeDeal;

    if (activeDeal === "50% off") {
      return total * 0.5;
    } else if (activeDeal === "Buy 1 Get 1 Free") {
      return total - 1.5;
    } else {
      return total;
    }
  };

  const handleCartUpdate = (itemName:any, newCount:number) => {
    // Placeholder for your actual logic to update the cart
    const updatedCart = cart.map((item:any) => {
      if (item.item === itemName) {
        return { ...item, count: newCount };
      }
      return item;
    });

    setView((prevView:any) => ({ ...prevView, cart: updatedCart }));
  };

  const total = calculateTotal();
  const discountedTotal = applyPromotion(total);

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-8 p-10">
        <p className="text-3xl font-bold mb-4">Your Cart</p>
        {cart.length > 0 ? (
          <div className="menu-items p-4">
            {cart.map((item:any) => (
              <div key={item.item} className="menu-item">
                <img src={`/menu/${item.item}.webp`} className="h-16" />
                <p className="font-bold text-2xl">{item.item}</p>
                <div className="flex gap-2">
                  <p className="flex self-center font-bold">
                    ${item.price}
                  </p>
                  <div className="red-espresso">
                    <button
                      className="p-2 red-espresso text-white"
                      onClick={() => handleCartUpdate(item.item, item.count - 1)}
                    >
                      -
                    </button>
                    <span className="p-2 font-bold text-white">
                      {item.count}
                    </span>
                    <button
                      className="p-2 red-espresso text-white"
                      onClick={() => handleCartUpdate(item.item, item.count + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p>Your cart is empty</p>
            <button
              onClick={() => setView({ ...view, page: "order" })}
              className="p-2 mt-4 red-espresso text-white rounded-md"
            >
              Make a new order
            </button>
          </div>
        )}
        {cart.length > 0 && (
          <div className="mt-4">
            <p>Taxes: ${(discountedTotal * 0.12).toFixed(2)}</p>
<p className="text-xl font-bold">Total: ${(discountedTotal + discountedTotal * 0.12).toFixed(2)}</p>

            {view.activeDeal && (<>
                <p className="text-red-600">
                Promotion: {view.activeDeal} applied! Discounted total shown.
                </p>
                <p className="text-red-600">
                You saved: ${(total - discountedTotal)}
                </p>

                </>)}
            <div className="flex gap-4">
                <button className="flex-1 p-2 mt-4 red-espresso text-white rounded-md">
                    Pay Now
                </button>
                <button className="flex-1 p-2 mt-4 red-espresso text-white rounded-md">
                    Pay In-Store
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
