import { useContext, useState } from "react";
import Header from "./Header";
import { menu } from "../db/menu.js";
import { AppContext } from "../App.js";

export default function Order() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const { view, setView } = useContext(AppContext);
  const { cart } = view;

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  const handleBackButtonClick = () => {
    setSelectedCategory(null);
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

  const renderMenuButtons = () => {
    const categories = Object.keys(menu);

    return (
      <div className="flex flex-col gap-4 p-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="category-button text-xl"
          >
            {category}
          </button>
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
        <div className="flex gap-4">
            <button onClick={handleBackButtonClick} className="rounded-lg p-2 text-2xl red-espresso text-white font-bold">
            Back
            </button>
            <button
            onClick={() => setView({ ...view, page: "checkout" })}
            className="rounded-lg p-2 text-2xl red-espresso text-white font-bold"
            >
            Checkout
            </button>

        </div>
        <h2 className="font-bold text-2xl text-center p-2">{selectedCategory}</h2>
        {items.map((item) => (
          <div key={item} className="menu-item">
            <img src={`/menu/${item}.webp`} className="h-16" />
            <p className="flex self-center font-bold text-2xl">
              {menu[selectedCategory][item].name}
            </p>
            <div className="flex gap-2">
              <p className="flex self-center font-bold">
                ${menu[selectedCategory][item].cost.toFixed(2)}
              </p>
              {cart.find((cartItem: any) => cartItem.item === item && cartItem.count > 0 ) ? (
                <div className="flex red-espresso rounded-md">
                  <button
                    className="p-2 red-espresso text-white flex self-center"
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
                  <span className=" p-2 font-bold text-white flex self-center">{cart.find((cartItem: any) => cartItem.item === item).count}</span>

                  <button
                    className="p-2 red-espresso text-white flex self-center"
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
                  
                </div>
              ) : (
                <button
                  className="p-2 red-espresso text-white"
                  onClick={() => handleCartUpdate(item, 1)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container creamy-latte">
      <Header />
      <div className="mt-8 p-10">
        <p className="text-3xl font-bold mb-4">Menu</p>
        {renderMenuItems()}

        
      </div>
    </div>
  );
}
