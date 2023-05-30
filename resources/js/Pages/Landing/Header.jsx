import React from "react";
import LandingImage from "../../../images/cappadocia-view.jpg";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link, Head } from "@inertiajs/react";
import NevtikLogo from "../../../images/logo-nevtik.png";
import Cappodacia from "../../../images/cappadocia-view.jpg";
import * as Bs from "react-icons/bs";

const Header = ({ auth, onChange, titleDestination }) => {
    const { user } = auth ?? {};

    return (
        <div>
            <div className="w-full flex items-center justify-around bg-white">
                <Link href="/">
                    <span className="flex items-center font-extrabold text-3xl font-mono">
                        <img src={NevtikLogo} alt="" width={100} />
                        <p>NEVTIK TOURIST</p>
                    </span>
                </Link>
                <nav className="flex justify-center items-center gap-x-5">
                    <Link href="/" className="text-green-400 text-xl">
                        Home
                    </Link>
                    <Link
                        href="/blogs"
                        className="text-xl hover:text-green-400"
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/service"
                        className="text-xl hover:text-green-400"
                    >
                        Service
                    </Link>
                    <Link
                        href="/contact"
                        className="text-xl hover:text-green-400"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/register"
                        className={`text-xl ml-5 py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            user ? "hidden" : ""
                        }`}
                    >
                        Register
                    </Link>
                    <Link
                        href="/login"
                        className={`text-xl py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            user ? "hidden" : ""
                        }`}
                    >
                        Login
                    </Link>
                    <Link
                        href="/dashboard"
                        className={`text-xl py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            user ? "" : "hidden"
                        }`}
                    >
                        Dashboard
                    </Link>
                </nav>
            </div>
            <div
                className="bg-cover bg-center h-fit md:px-32 pt-32"
                style={{
                    backgroundImage: `url(${Cappodacia})`,
                }}
            >
                <div className="absolute inset-x-0 md:left-32 z-0 w-64 h-64 mx-auto md:mx-0 rounded-full shadow-2xl bg-black bg-opacity-50 blur-xl shadow-gray-900"></div>
                <h1 className="relative md:text-6xl text-4xl mx-auto md:mx-0 text-center md:text-left z-10 font-extrabold block w-fit text-gray-50">
                    Discover Your Life <br />
                    It's A Big World <br />
                    Out There
                </h1>
                <div className="relative bg-gray-600 z-10 w-fit py-5 px-7 mt-5 mx-auto md:mx-0 rounded-full text-gray-100 hover:bg-gray-200 hover:text-gray-700 transition-all ease-in-out">
                    Explore <Bs.BsArrowRight className="inline text-2xl ml-2" />
                </div>
                <div className="bg-gray-50 translate-y-16 lg:w-2/5  grid grid-cols-3 mx-auto px-10 py-7 rounded-lg gap-x-10">
                    <div
                        onClick={onChange}
                        id="1"
                        className={`lg:px-10 py-4 cursor-pointer font-bold transition-all ease-in-out text-center text-xl rounded-lg ${
                            titleDestination == "Nature"
                                ? "bg-green-400 text-gray-50 hover:bg-green-400 hover:text-gray-50"
                                : "hover:bg-green-400 hover:text-gray-50"
                        }`}
                    >
                        Nature
                    </div>
                    <div
                        onClick={onChange}
                        id="2"
                        className={`lg:px-10 py-4 cursor-pointer font-bold transition-all ease-in-out text-center text-xl rounded-lg ${
                            titleDestination == "Art"
                                ? "bg-green-400 text-gray-50 hover:bg-green-400 hover:text-gray-50"
                                : "hover:bg-green-400 hover:text-gray-50"
                        }`}
                    >
                        Art
                    </div>
                    <div
                        onClick={onChange}
                        id="3"
                        className={`lg:px-10 py-4 cursor-pointer font-bold transition-all ease-in-out text-center text-xl rounded-lg ${
                            titleDestination == "City"
                                ? "bg-green-400 text-gray-50 hover:bg-green-400 hover:text-gray-50"
                                : "hover:bg-green-400 hover:text-gray-50"
                        }`}
                    >
                        City
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
