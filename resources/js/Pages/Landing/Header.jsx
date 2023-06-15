import React from "react";
import LandingImage from "../../../images/cappadocia-view.jpg";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link, Head } from "@inertiajs/react";
import NevtikLogo from "../../../images/logo-nevtik.png";
import Cappodacia from "../../../images/cappadocia-view.jpg";
import * as Bs from "react-icons/bs";
import { motion } from "framer-motion";

const Header = ({ auth, onChange, titleDestination }) => {
    const { user } = auth ?? {};

    return (
        <div>
            <div className="w-full flex items-center justify-around bg-white">
                <Link href="/">
                    <motion.span
                        initial={{ opacity: 0, x: -400 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1.5 },
                        }}
                        className="flex items-center font-extrabold text-3xl font-mono"
                    >
                        <img src={NevtikLogo} alt="" width={100} />
                        <p>NEVTIK TOURIST</p>
                    </motion.span>
                </Link>
                <motion.nav
                    initial={{ opacity: 0, x: 400 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1.5 },
                    }}
                    className="flex justify-center items-center gap-x-5"
                >
                    <div className="text-green-400 group relative inline-block py-2 px-4 border border-transparent text-base font-medium transition duration-200 ease-in-out">
                        <Link
                            className="relative z-10 font-ubuntu text-lg"
                            href="/"
                        >
                            Home
                        </Link>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
                    </div>
                    <div className="text-xl hover:text-green-400 group relative inline-block py-2 px-4 border border-transparent font-medium transition duration-200 ease-in-out">
                        <Link href="/blogs">Blogs</Link>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
                    </div>
                    <div className="text-xl hover:text-green-400 group relative inline-block py-2 px-4 border border-transparent font-medium transition duration-200 ease-in-out">
                        <Link href="#services">Service</Link>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
                    </div>
                    <div className="text-xl hover:text-green-400 group relative inline-block py-2 px-4 border border-transparent font-medium transition duration-200 ease-in-out">
                        <Link href="#contactus">Contact</Link>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
                    </div>
                    <div
                        className={`text-xl ml-5 py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            user ? "hidden" : ""
                        }`}
                    >
                        <Link href="/register">Register</Link>
                    </div>
                    <div
                        className={`text-xl py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            user ? "hidden" : ""
                        }`}
                    >
                        <Link href="/login">Login</Link>
                    </div>
                    <div
                        className={`text-xl py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            user ? "" : "hidden"
                        }`}
                    >
                        <Link href="/dashboard">Dashboard</Link>
                    </div>
                    <div
                        className={`text-xl py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            user ? "" : "hidden"
                        }`}
                    >
                        <Link href={route("logout")} method="post">
                            Logout
                        </Link>
                    </div>
                </motion.nav>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
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
                <div className="bg-gray-50 translate-y-16 max-w-6xl grid grid-cols-3 mx-auto px-10 py-7 rounded-lg gap-x-10">
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
            </motion.div>
        </div>
    );
};

export default Header;
