import { useContext } from "react";
import { AppContext } from "../App";


export default function Navbar() {
    const {view, setView} = useContext(AppContext);

    return(
        <div className="flex justify-between bottom-0 red-espresso text-white font-bold p-2 px-6">
            <div onClick={()=>setView({...view, page:"home"})} className="flex flex-col justify-center">
                <img src="/public/vite.svg" alt="" />
                <span>Home</span>
            </div>
            <div onClick={()=>setView({...view, page:"menu"})} className="flex flex-col justify-center">
                <img src="/public/vite.svg" alt="" />
                <span>Menu</span>
            </div>
            {/* <div onClick={()=>setView({...view, page:"scan"})} className="flex flex-col justify-center">
                <img src="/public/vite.svg" alt="" />
                <span>Scan</span>
            </div> */}
            <div onClick={()=>setView({...view, page:"deals"})} className="flex flex-col justify-center">
                <img src="/public/vite.svg" alt="" />
                <span>Deals</span>
            </div>
        </div>
    );
}