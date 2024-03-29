import React from "react";
import { Link, Head } from "@inertiajs/react";
import NevtikLogo from "../../images/logo-nevtik.png";

const Blog = (props) => {
    const authenticated = props.authenticated;
    const blog = props.blog;
    const { news_title, news_slug, news_content, news_date, news_image } = blog;
    console.log(news_title, news_slug, news_content, news_date, news_image);
    console.log(authenticated);
    return (
        <div className="min-h-screen w-screen bg-zinc-700">
            <Head title={news_title} />
            <div className="w-full flex items-center justify-around bg-white">
                <Link href="/">
                    <span className="flex items-center font-extrabold text-3xl font-mono">
                        <img src={NevtikLogo} alt="" width={100} />
                        <p>NEVTIK TOURIST</p>
                    </span>
                </Link>
                <nav className="flex justify-center items-center gap-x-5">
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
                    <Link
                        href="/register"
                        className={`text-xl ml-5 py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            authenticated ? "hidden" : ""
                        }`}
                    >
                        Register
                    </Link>
                    <Link
                        href="/login"
                        className={`text-xl py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            authenticated ? "hidden" : ""
                        }`}
                    >
                        Login
                    </Link>
                    <Link
                        href="/dashboard"
                        className={`text-xl py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            authenticated ? "" : "hidden"
                        }`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href={route("logout")}
                        method="post"
                        className={`text-xl py-2 px-3 rounded-md text-gray-50 bg-green-400 hover:bg-green-500 transition-colors hover:shadow-md ${
                            authenticated ? "" : "hidden"
                        }`}
                    >
                        Logout
                    </Link>
                </nav>
            </div>
            <div className="max-w-4xl mx-auto text-gray-100">
                <h1 className="font-extrabold text-center text-6xl mt-24">
                    {news_title}
                </h1>
                <div className="bg-slate-200 rounded-md w-fit mx-auto">
                    <img
                        src={`/${news_image}`}
                        className="mt-16 p-5 max-w-2xl"
                        alt=""
                        draggable="false"
                    />
                </div>
                <p className="text-gray-100 mt-10">{news_content}</p>
            </div>
        </div>
    );
};

export default Blog;
