import React, { useContext } from "react";
import { NevtikLogo } from "./Images";
import { Link } from "@inertiajs/react";
import { DashboardContext } from "../Dashboard";
import { HiUsers } from "react-icons/hi";
import { FaUserCheck, FaHotel } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiGooglenews, SiWebpack } from "react-icons/si";
import { GiMountaintop } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { GrUserWorker } from "react-icons/gr";
import { RiReservedLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
const Sidebar = () => {
    const { page } = useContext(DashboardContext);

    const features = [
        {
            name: "User",
            page: "user",
            icon: HiUsers,
            route: route("dashboard.user"),
        },
        {
            name: "Customer",
            page: "customer",
            icon: FaUserCheck,
            route: route("dashboard.customer.index"),
        },
        {
            name: "Travel Category",
            page: "travel-category",
            icon: MdOutlineTravelExplore,
            route: route("dashboard.travel-category.index"),
        },
        {
            name: "News Category",
            page: "news-category",
            icon: SiGooglenews,
            route: route("dashboard.news-category.index"),
        },
        {
            name: "Tourist Attraction",
            page: "travel",
            icon: GiMountaintop,
            route: route("dashboard.tourist-attraction.index"),
        },
        {
            name: "Hostelry",
            page: "hostelry",
            icon: FaHotel,
            route: route("dashboard.hostelry.index"),
        },
        {
            name: "News",
            page: "news",
            icon: ImNewspaper,
            route: route("dashboard.news.index"),
        },
        {
            name: "Employee",
            page: "employee",
            icon: GrUserWorker,
            route: route("dashboard.employee.index"),
        },
        {
            name: "Travel Package",
            page: "travel-package",
            icon: SiWebpack,
            route: route("dashboard.travel-package.index"),
        },
        {
            name: "Reservation",
            page: "reservation",
            icon: RiReservedLine,
            route: route("dashboard.reservation.index"),
        },
        {
            name: "Report Analytics",
            page: "report",
            icon: TbReportAnalytics,
            route: route("dashboard.report.index"),
        },
    ];

    return (
        <aside className="sidebar sticky flex flex-col items-center overflow-x-visible left-0 top-0 w-24 h-screen bg-gradient-to-t from-blue-400 to-emerald-400 dark:bg-gradient-to-t dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500">
            <div className="h-1/6">
                <NevtikLogo className="w-28" />
            </div>
            <div className="menu flex flex-col gap-y-6 items-center justify-center">
                {features.map((feature, index) => (
                    <Link
                        className="flex items-center justify-start group"
                        key={index}
                        href={feature.route}
                    >
                        <feature.icon
                            className={
                                "text-vintage-50 ease-out transition-all z-10 delay-100 " +
                                (page === feature.page
                                    ? " bg-vintage-100 hover:text-vintage-200 p-3 rounded-full"
                                    : "hover:text-vintage-100")
                            }
                            size={page === feature.page ? 70 : 40}
                        />
                        <h2
                            className={`absolute group-hover:translate-x-20 transition-all w-40 p-4 rounded-r-full group-hover:text-gray-50 invisible group-hover:visible group-hover:bg-vintage-100 ${
                                page === feature.page ? "ml-3" : ""
                            }`}
                        >
                            {feature.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
