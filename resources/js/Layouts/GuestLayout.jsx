import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Logo from "../../images/logo-nevtik.png";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex">
            <div className="w-2/3 flex flex-col justify-center items-center">
                <div>
                    {/* <Link href="/"><img src={Logo} alt="Nevtik" className="w-32 h-32 fill-current text-gray-500"/></Link> */}
                    <span className="text-4xl font-extrabold underline underline-offset-[15px]">
                        Log in
                    </span>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
            <div className="w-1/3 bg-green-400">
                <h1>Hello, Friend!</h1>
                <p>Fill up Personal Information and Start Explore with Us!</p>
                <span>Sign Up</span>
            </div>
        </div>
    );
}
