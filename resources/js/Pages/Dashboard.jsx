import { createContext, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UserList from "./Entities/UserList";
import CategoryList from "./Entities/CategoryList";
import NewsList from "./Entities/NewsList";
import TravelCategoryList from "./Entities/TravelCategoryList";
import Toast from "@/Components/Toast";
import TravelList from "./Entities/TravelList";
import HostelryList from "./Entities/HostelryList";
import CustomerList from "./Entities/CustomerList";
import TravelPackageList from "./Entities/TravelPackageList";
import EmployeeList from "./Entities/EmployeeList";
import ReservationList from "./Entities/ReservationList";
import ReportList from "./Entities/ReportList";

export const DashboardContext = createContext();

const Dashboard = (props) => {
    const { auth, flash } = props;
    let { success, error, warning, info } = flash;

    let loadedComponent = null;

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                document.getElementById("toast-success").remove();
            }, 5000);
        }
        if (error) {
            setTimeout(() => {
                document.getElementById("toast-error").remove();
            }, 5000);
        }
        if (warning) {
            setTimeout(() => {
                document.getElementById("toast-warning").remove();
            }, 5000);
        }
        if (info) {
            setTimeout(() => {
                document.getElementById("toast-info").remove();
            }, 5000);
        }
    }, [success, error, warning, info]);

    switch (props.page) {
        case "user":
            loadedComponent = <UserList />;
            break;
        case "news-category":
            loadedComponent = <CategoryList />;
            break;
        case "news":
            loadedComponent = <NewsList />;
            break;
        case "travel-category":
            loadedComponent = <TravelCategoryList />;
            break;
        case "travel":
            loadedComponent = <TravelList />;
            break;
        case "hostelry":
            loadedComponent = <HostelryList />;
            break;
        case "customer":
            loadedComponent = <CustomerList />;
            break;
        case "travel-package":
            loadedComponent = <TravelPackageList />;
            break;
        case "employee":
            loadedComponent = <EmployeeList />;
            break;
        case "reservation":
            loadedComponent = <ReservationList />;
            break;
        case "report":
            loadedComponent = <ReportList />;
            break;
    }

    return (
        <DashboardContext.Provider value={props}>
            <AuthenticatedLayout auth={props.auth} errors={props.errors}>
                <Head title="Dashboard" />
                {(success && (
                    <Toast
                        id="toast-success"
                        message={success}
                        className={`m-4 mx-auto`}
                    >
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                    </Toast>
                )) ||
                    (error && (
                        <Toast
                            id="toast-error"
                            message={error}
                            className="m-4 mx-auto"
                        >
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Error icon</span>
                            </div>
                        </Toast>
                    ))}
                {loadedComponent}
                {/* <div className="flex relative overflow-x-auto shadow-md sm:rounded-lg">
            </div> */}
            </AuthenticatedLayout>
        </DashboardContext.Provider>
    );
};

export default Dashboard;
