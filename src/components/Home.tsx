import { useContext } from "react";
import QRCode from "./QRCode";
import Card from "./Card"; // Assuming you have a Card component
import { AppContext } from "../App";

export default function Home() {
  const { setView } = useContext(AppContext);

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl text-center text-red-600 font-bold">
          Welcome back, Jack Boeri!
        </h1>
        <p className="text-lg text-center text-gray-700">
          Scan your QR code to earn points on your next purchase.
        </p>
      </div>
      <div className="flex justify-center">
        <QRCode />
      </div>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() =>
            setView((prevView: any) => ({ ...prevView, page: "deals" }))
          }
          className="rounded-lg p-4 text-2xl red-espresso text-white font-bold"
        >
          Deals
        </button>
        <button
          onClick={() =>
            setView((prevView: any) => ({ ...prevView, page: "order" }))
          }
          className="rounded-lg p-4 text-2xl red-espresso text-white font-bold"
        >
          Order
        </button>
      </div>
      <div className="flex flex-col gap-6 mt-4 p-6">
        <Card
          type="full-width"
          image="/menu/financial.webp"
          title="Kickstart your earnings with 5,000 extra points"
          link={{link:"http://www.timsfinancial.ca", caption:"*Terms apply."}}
          caption="With a new Tims® Mastercard® you get 2,000 extra points on your first purchase in month one, and 1,000 extra for each month you spend $200 or more in the first 3 months.*"
        />
        <Card
          type="full-width"
          image="/ads/sweet_chili_chicken.webp"
          title="A perfect combo of sweet and a hint of heat"
          link={{link:"https://www.timhortons.ca/?lang=en#:~:text=a%20Quencher%20today!-,*Terms%20apply.,-Order%20now", caption:"*Terms apply."}}
          caption="Loaded Wraps & Bowls. With tasty grains, veggies, chicken, and sweet chili sauce. Enjoy with Sea Salt Wedges and a Quencher today!"
        />
        <Card
          type="full-width"
          image="/ads/word_challenge.webp"
          title="Play now in the app! Tims Word Challenge"
          link={{link:"https://www.timhortons.ca", caption:"*Terms apply."}}
          caption="The tastiest word puzzle game is here. Play Tims Word Challenge every day in the Tims app to build and maintain your daily streak. Three new levels are unlocked each day!"
        />
        <Card
          type="full-width"
          image="/ads/tims_classics.webp"
          title="The Tims 60th Anniversary Mug is here!"
          link={{link:"https://www.timhortons.ca", caption:"*Terms apply."}}
          caption="Help celebrate our 60th anniversary by picking up an exclusive limited-edition retro-style mug, available now."
        />
        <Card
          type="full-width"
          image="/ads/points_are_rewarding.webp"
          title="Using your points is rewarding"
          link={{link:"https://www.timhortons.ca", caption:"*Terms apply."}}
          caption="Track your balance and see what rewards are waiting!"
        />
        <Card
          type="full-width"
          image="/ads/join_tims.webp"
          title="Join your local Tims"
          link={{link:"https://www.timhortons.ca", caption:"*Terms apply."}}
          caption="Build transferrable skills to better prepare for your future. Explore opportunities at your local Tims now and make your next move. Your team is waiting"
        />

        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    </div>
  );
}
