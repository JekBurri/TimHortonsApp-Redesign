import { useContext } from "react";
import { AppContext } from "../App";


export default function Navbar() {
    const {view, setView} = useContext(AppContext);

    return(
        <div className="flex justify-between bottom-0 red-espresso text-white font-bold p-2 px-12">
            <div onClick={()=>setView({...view, page:"home"})} className="flex flex-col justify-center">
                <img src="/navbar/home.png" className="flex self-center justify-center align-middle  h-10" alt="" />
                <span className="text-center">Home</span>
            </div>
            <div onClick={()=>setView({...view, page:"order"})} className="flex flex-col justify-center">
                <img src="/navbar/paper-cup.png" className="flex self-center justify-center align-middle h-10" alt="" />
                <span className="text-center">Order</span>
            </div>
            <div onClick={()=>setView({...view, page:"deals"})} className="flex flex-col justify-center">
                <img src="/navbar/discount.png" className="flex self-center justify-center align-middle h-10" alt="" />
                <span className="text-center">Deals</span>
            </div>
        </div>
    );
}