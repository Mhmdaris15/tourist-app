import { Link, Head } from "@inertiajs/react";
import Header from "./Landing/Header";
import Image from "../../images/deutschland-view.jpg";
import { GoLocation } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import CardDestination from "./CardDestination";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="w-screen">
                <Header {...props} />

                {/* Popular Destination */}
                <div className="h-screen mt-32">
                    <h1 className="font-extrabold mb-5 text-center text-3xl md:text-6xl">
                        Nature Destination
                    </h1>
                    <div className="absolute right-8 -translate-y-20 lg:flex gap-x-3 hidden">
                        <BsFillArrowLeftCircleFill
                            className="text-green-300 hover:text-green-200 transition-all ease-in cursor-pointer"
                            size={50}
                        />
                        <BsFillArrowRightCircleFill
                            className="text-green-300 hover:text-green-200 transition-all ease-in cursor-pointer"
                            size={50}
                        />
                    </div>
                    <div className="w-full flex items-center lg:justify-evenly lg:gap-y-0 gap-2 justify-center flex-wrap">
                        <CardDestination />
                        <CardDestination />
                        <CardDestination />
                    </div>
                </div>
            </div>
        </>
    );
}
