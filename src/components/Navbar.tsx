import { useContext } from "react";
import { AppContext } from "../App";


export default function Navbar() {
    const {view, setView} = useContext(AppContext);

    return(
        <div className="flex justify-between bottom-0 red-espresso text-white font-bold p-2 px-20">
            <div onClick={()=>setView({...view, page:"home"})} className="flex gap-2 flex-col justify-center">
                <img src="/navbar/home.png" className="h-10" alt="" />
                <span className="text-center">Home</span>
            </div>
            <div onClick={()=>setView({...view, page:"order"})} className="flex gap-2 flex-col justify-center">
                <img src="/navbar/paper-cup.png" className="h-10" alt="" />
                <span className="text-center">Menu</span>
            </div>
            <div onClick={()=>setView({...view, page:"deals"})} className="flex gap-2 flex-col justify-center">
                <img src="/navbar/discount.png" className="h-10" alt="" />
                <span className="text-center">Deals</span>
            </div>
        </div>
    );
}