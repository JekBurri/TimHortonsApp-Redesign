import { useContext, useState } from "react";
import { menu } from "../db/menu.js";
import { AppContext } from "../App.js";

export default function Order() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const { view, setView } = useContext(AppContext);
  const { cart } = view;

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  const handleCartUpdate = (item: any, count: any) => {
    setView((prevView: any) => ({
      ...prevView,
      cart: [
        ...prevView.cart.filter((cartItem: any) => cartItem.item !== item),
        {
          item,
          count,
          price: menu[selectedCategory][item].cost.toFixed(2),
        },
      ],
    }));
  };

  function getFirstMenuItem(category: string): any | undefined {
    const keys = Object.keys(menu[category]);
    const firstIndex = keys[0];

    return firstIndex + ".webp";
  }

  const renderMenuButtons = () => {
    // const categories = Object.keys(menu);

    return (
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(menu).map(([category]) => (
          <div key={category} onClick={() => handleCategoryClick(category)}>
            <div className="flex bg-white rounded-lg shadow-md p-4">
              <img
                src={"/menu/" + getFirstMenuItem(category)}
                alt={""}
                className="h-14"
              />
              <h2 className="flex self-center text-xl py-2 font-bold">
                {category}
              </h2>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderMenuItems = () => {
    if (!selectedCategory) {
      return renderMenuButtons();
    }

    const items = Object.keys(menu[selectedCategory]);
    console.log(items);

    return (
      <div className="menu-items">
        <h2 className="font-bold text-2xl text-center p-2">
          {selectedCategory}
        </h2>
        {items.map((item) => (
          <div key={item} className="menu-item">
            <div className="flex gap-4">
              {cart.find(
                  (cartItem: any) => cartItem.item === item && cartItem.count > 0
                ) ? (
                  <div className="flex flex-col justify-center">
                    <button
                      className="red-espresso rounded-xl text-sm text-white h-5 w-5 flex self-center justify-center"
                      onClick={() =>
                        handleCartUpdate(
                          item,
                          cart.find((cartItem: any) => cartItem.item === item)
                            .count + 1
                        )
                      }
                    >
                      +
                    </button>
                    <span className="p-2 font-bold text-red-500 flex self-center">
                      {cart.find((cartItem: any) => cartItem.item === item).count}
                    </span>
                    <button
                      className="red-espresso rounded-xl text-sm text-white h-5 w-5 flex self-center justify-center"
                      onClick={() =>
                        handleCartUpdate(
                          item,
                          cart.find((cartItem: any) => cartItem.item === item)
                            .count - 1
                        )
                      }
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <button
                    className="red-espresso rounded-xl text-sm text-white h-5 w-5 flex self-center justify-center"
                    onClick={() => handleCartUpdate(item, 1)}
                  >
                    +
                  </button>
                )}
              <p className="flex self-center font-bold text-lg">
                {menu[selectedCategory][item].name}
              </p>
            </div>
            <div>
              
            </div>
            <div className="flex gap-2">
              
              
            <div className="rounded-full border-2 border-red-500 overflow-hidden">
  <div className="aspect-w-1 aspect-h-1">
    <img src={`/menu/${item}.webp`} className="object-cover w-24 h-24" />
  </div>
  <p className="flex justify-center font-bold text-white bg-red-500">
    ${menu[selectedCategory][item].cost.toFixed(2)}
  </p>
</div>

            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container creamy-latte">
      <div className="mt-8 p-10">
        <div className="flex justify-center gap-2 mb-2 bg-white p-4 rounded-lg">
          <p className="flex self-center justify-center text-bold text-xl">
            Chosen Store: 920 Steveston Highway
          </p>
          <button className="p-2 red-espresso text-white flex self-center rounded-md">
            Change Store
          </button>
        </div>
        {renderMenuItems()}
        <div className="flex justify-between">
          <button
            onClick={() => {
              setView((prevView: any) => ({ ...prevView, page: "home" }));
              setSelectedCategory(null);
            }}
            className="rounded-lg mt-4 p-2 text-2xl red-espresso text-white font-bold"
          >
            Go Back
          </button>
          <button
            onClick={() => setView({ ...view, page: "cart" })}
            className="rounded-lg p-2 mt-4 text-2xl red-espresso text-white font-bold"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
