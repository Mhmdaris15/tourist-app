import React from "react";
import Image from "../../../images/deutschland-view.jpg";
import { GoLocation } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "@inertiajs/react";

const CardDestination = (props) => {
    const { package_name, slug, facilities, description, price, discount } =
        props;
    const rating = 4.5;
    return (
        <Link
            href={`/travel-packages/${slug}`}
            className="flex flex-col cursor-pointer hover:-translate-y-2 transition-all lg:w-1/4 md:w-1/2 bg-slate-50 rounded-lg"
        >
            <img
                src={Image}
                alt="Travel Destination Image"
                className="relative w-fit rounded-t-lg"
            />
            <div className="bg-slate-50 w-2/3 rounded-xl text-center pt-2 mx-auto -translate-y-10">
                <p className="text-green-400 font-bold">{package_name}</p>
                <span className="flex items-center gap-x-1 mt-1 bg-green-400 w-fit rounded-full mx-auto px-3 py-2 text-slate-50">
                    <BsCurrencyDollar />
                    <p>
                        {price} | {discount * 100}% OFF
                    </p>
                </span>
            </div>
            <div className="px-5 pb-5 grow flex flex-col justify-between">
                <p className="relative">{description}</p>
                <p className="relative">{facilities}</p>
                <div className="flex justify-end gap-x-1 items-center mr-5">
                    <AiFillStar className="text-yellow-300 inline text-right" />
                    <p className="text-gray-500">{rating}</p>
                </div>
            </div>
        </Link>
    );
};

export default CardDestination;
