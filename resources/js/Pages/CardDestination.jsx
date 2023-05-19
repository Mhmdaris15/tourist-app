import React from "react";
import Image from "../../images/deutschland-view.jpg";
import { GoLocation } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";

const CardDestination = () => {
    return (
        <div className="flex flex-col cursor-pointer hover:-translate-y-2 transition-all lg:w-1/4 md:w-1/2 bg-slate-50 rounded-lg">
            <img src={Image} alt="" className="relative w-fit rounded-t-lg" />
            <div className="bg-slate-50 w-2/3 rounded-xl text-center pt-2 mx-auto -translate-y-10">
                <p className="text-green-400 font-bold">Mount Bromo</p>
                <span className="flex items-center gap-x-1 mt-1 bg-green-400 w-fit rounded-full mx-auto px-3 py-2 text-slate-50">
                    <GoLocation />
                    <p>Malang Indonesia</p>
                </span>
            </div>
            <div className="px-5 pb-5">
                <p className="relative">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem incidunt error quas fugit a quo! Culpa dolores libero
                    sapiente ullam?
                </p>
                <div className="flex justify-end gap-x-1 items-center mr-5">
                    <AiFillStar className="text-yellow-300 inline text-right" />
                    <p className="text-gray-500">4.5</p>
                </div>
            </div>
        </div>
    );
};

export default CardDestination;
