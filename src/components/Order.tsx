import { useContext, useState } from "react";
import { menu } from "../db/menu.js";
import { AppContext } from "../App.js";
import Card from "./Card";

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

  function getFirstMenuItem(category: string): any | undefined {
    const keys = Object.keys(menu[category]);
    const firstIndex = keys[0];

    return firstIndex + ".webp";
  }

  const renderMenuButtons = () => {
    // const categories = Object.keys(menu);

    return (
      <div className="flex flex-col">
      {Object.entries(menu).map(([category]) => (
        <div key={category} className="flex flex-col p-4" onClick={() => handleCategoryClick(category)}>
          {/* Card component */}
          <Card
            key={category}
            type="full-width"
            // Use the first item's img property if available
            image={"/menu/" + getFirstMenuItem(category)}
            title={category}
            caption=""
          />
    
         
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
        <div className="flex gap-4">
          <button
            onClick={handleBackButtonClick}
            className="rounded-lg p-2 text-2xl red-espresso text-white font-bold"
          >
            Back
          </button>
        </div>
        <h2 className="font-bold text-2xl text-center p-2">
          {selectedCategory}
        </h2>
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
              {cart.find(
                (cartItem: any) => cartItem.item === item && cartItem.count > 0
              ) ? (
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
                  <span className=" p-2 font-bold text-white flex self-center">
                    {cart.find((cartItem: any) => cartItem.item === item).count}
                  </span>

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
      <div className="mt-8 p-10">
        <p className="text-3xl font-bold mb-4">Menu</p>
        {renderMenuItems()}
      </div>
    </div>
  );
}
