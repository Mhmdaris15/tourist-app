import React from "react";
import { Head, Link } from "@inertiajs/react";
import NevtikLogo from "../../images/logo-nevtik.png";

const BlogHome = (props) => {
    const blogs = props.blogs;
    const authenticated = props.authenticated;
    return (
        <div>
            <Head title="Blog Home" />
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
            <div className="grid pt-5 md:grid-cols-2 justify-items-center mx-auto gap-5 w-full">
                {blogs.map((blog, index) => (
                    <Link
                        key={index}
                        href={`/blogs/${blog.news_slug}`}
                        className="flex md:flex-row flex-col w-full cursor-pointer p-3 md:max-h-52 max-h-80 overflow-hidden bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-green-400 hover:border-gray-900 transition-all lg:hover:translate-x-6 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-1/2 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={`/${blog.news_image}`}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {blog.news_title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {blog.news_content}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogHome;
