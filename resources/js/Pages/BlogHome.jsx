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
                </nav>
            </div>
            <div className="grid grid-cols-2 place-content-center mx-auto gap-5 w-full">
                {blogs.map((blog, index) => (
                    <a
                        key={index}
                        href={`/blogs/${blog.news_slug}`}
                        className="flex flex-col items-center cursor-pointer bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
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
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BlogHome;
