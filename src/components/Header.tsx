import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function Header() {

    const {view} = useContext(AppContext);
    useEffect(()=>{console.log(view)},[view]);
    const totalCount = view.cart.reduce((total:any, item:any) => total + item.count, 0);
  return (
    <div className="flex justify-between top-0 red-espresso text-white p-2 px-6">
      <div className="flex flex-col justify-center">
       <p className="font-bold text-xl">jack boeri</p>
       <p className="text-center">920 Points</p>
      </div>
      <div className="flex flex-col justify-center">
       <p className="font-bold text-lg text-center">Preferred Store</p>
       <p className="text-center text-sm">920 Steveston Highway</p>
      </div>
      <div className="flex gap-2 justify-center my-2">
       <button className="rounded-lg p-2 border font-bold">Cart <span>{totalCount >0 ? "("+totalCount+")":""}</span></button>
      </div>
    </div>
  );
}
