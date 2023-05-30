import React from 'react'
import { Link, Head } from "@inertiajs/react";
import NevtikLogo from "../../images/logo-nevtik.png";

const Blog = (props) => {
    const authenticated = props.authenticated
    const blog = props.blog
    const { news_title, news_slug, news_content, news_date, news_image } = blog
    console.log(news_title, news_slug, news_content, news_date, news_image)
    console.log(authenticated)
  return (
      <div className='h-screen w-screen bg-zinc-400'>
        <Head title={news_title} />
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
          <div className='max-w-4xl bg-yellow-100 mx-auto'>
              <h1 className='font-extrabold text-center text-6xl text-gray-900'>{news_title}</h1>
              <img src={`/${news_image}`} alt="" />
              <p className='text-gray-800'>{news_content}</p>
          </div>
      </div>
  )
}

export default Blog