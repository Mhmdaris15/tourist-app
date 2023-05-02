import React, { useContext } from "react";
import { NevtikLogo } from "./Images";
import { Link } from "@inertiajs/react";
import * as MD from "react-icons/md";
import { DashboardContext } from "../Dashboard";

const Sidebar = () => {
    const { page } = useContext(DashboardContext);

    return (
        <aside className="sidebar sticky left-0 top-0 w-24 h-screen bg-gradient-to-t from-blue-400 to-emerald-400 dark:bg-gradient-to-t dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500 flex flex-col items-center justify-around">
            <NevtikLogo className="w-28" />
            <div className="menu flex flex-col gap-y-6 items-center justify-center">
                <Link href={route("dashboard.user")}>
                    <MD.MdDashboard
                        className={
                            "text-vintage-50 ease-out transition-all delay-100 " +
                            (page === "user"
                                ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                : "hover:text-vintage-100")
                        }
                        size={page === "user" ? 70 : 40}
                    />
                </Link>
                <Link href={route("dashboard.news-category.index")}>
                    <MD.MdCategory
                        className={
                            "text-vintage-50 ease-out transition-all delay-100 " +
                            (page === "news-category"
                                ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                : "hover:text-vintage-100")
                        }
                        size={page === "news-category" ? 70 : 40}
                    />
                </Link>
                <Link href={route("dashboard.user")}>
                    <MD.MdPeople
                        className={
                            "text-vintage-50 ease-out transition-all delay-100 " +
                            (page === "employee"
                                ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                : "hover:text-vintage-100")
                        }
                        size={page === "employee" ? 70 : 40}
                    />
                </Link>
                <Link href={route("dashboard.customer.index")}>
                    <MD.MdPersonAddAlt1
                        className={
                            "text-vintage-50 ease-out transition-all delay-100 " +
                            (page === "customer"
                                ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                : "hover:text-vintage-100")
                        }
                        size={page === "customer" ? 70 : 40}
                    />
                </Link>
                <Link href={route("dashboard.user")}>
                    <MD.MdBeachAccess
                        className={
                            "text-vintage-50 ease-out transition-all delay-100 " +
                            (page === "destination"
                                ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                : "hover:text-vintage-100")
                        }
                        size={page === "destination" ? 70 : 40}
                    />
                </Link>
                <Link href={route("dashboard.hostelry.index")}>
                    <MD.MdApartment
                        className={
                            "text-vintage-50 ease-out transition-all delay-100 " +
                            (page === "hostelry"
                                ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                : "hover:text-vintage-100")
                        }
                        size={page === "hostelry" ? 70 : 40}
                    />
                </Link>
                <Link href={route("dashboard.news.index")}>
                    <MD.MdNewspaper
                        className={
                            "text-vintage-50 ease-out transition-all delay-100 " +
                            (page === "news"
                                ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                : "hover:text-vintage-100")
                        }
                        size={page === "news" ? 70 : 40}
                    />
                </Link>
                <Link href={route("dashboard.travel-category.index")}>
                    <MD.MdTour
                        className={
                            "text-vintage-50 ease-out transition-all delay-100 " +
                            (page === "travel-category"
                                ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                : "hover:text-vintage-100")
                        }
                        size={page === "travel-category" ? 70 : 40}
                    />
                </Link>
                <Link href={route("dashboard.tourist-attraction.index")}>
                    <MD.MdBackpack
                        className={
                            "text-vintage-50 ease-out transition-all delay-100 " +
                            (page === "travel"
                                ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                : "hover:text-vintage-100")
                        }
                        size={page === "travel" ? 70 : 40}
                    />
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
