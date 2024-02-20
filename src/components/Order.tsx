import React, { useContext, useState } from 'react';
import Header from './Header';
import { menu } from '../db/menu.js';
import { AppContext } from '../App.js';

export default function Order() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const { view, setView } = useContext(AppContext);
  const { cart } = view;

  const handleCategoryClick = (category:any) => {
    setSelectedCategory(category);
  };

  const handleBackButtonClick = () => {
    setSelectedCategory(null);
  };

  const handleCartUpdate = (item:any, count:any) => {
    setView((prevView:any) => ({
      ...prevView,
      cart: [
        ...prevView.cart.filter((cartItem:any) => cartItem.item !== item),
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
      <div className="menu-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="category-button"
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

    return (
      <div className="menu-items">
        <button onClick={handleBackButtonClick} className="back-button">
          Back
        </button>
        <h2>{selectedCategory}</h2>
        {items.map((item) => (
          <div key={item} className="menu-item">
            <p className="font-bold text-2xl">{menu[selectedCategory][item].name}</p>
            <div className="flex gap-2">
              <p className="flex self-center font-bold">${menu[selectedCategory][item].cost.toFixed(2)}</p>
              {cart.find((cartItem:any) => cartItem.item === item) ? (
                <div>
                  <button
                    className="p-2 red-espresso text-white"
                    onClick={() => handleCartUpdate(item, cart.find((cartItem:any) => cartItem.item === item).count + 1)}
                  >
                    +1
                  </button>
                  <button
                    className="p-2 red-espresso text-white"
                    onClick={() => handleCartUpdate(item, cart.find((cartItem:any) => cartItem.item === item).count - 1)}
                  >
                    -1
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
      {renderMenuItems()}
    </div>
  );
}
