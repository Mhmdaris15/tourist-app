import React from "react";
import Logo from "../../../images/logo-nevtik.png";

const Footer = () => {
    return (
        <footer
            id="contactus"
            className="mx-auto text-center h-64 mt-24 flex flex-col justify-between"
        >
            <section>
                <div className="flex items-center w-fit mx-auto">
                    <img
                        src={Logo}
                        width={100}
                        alt="NEVTIK Logo"
                        className="mx-auto"
                    />
                    <h1 className="text-4xl font-bold text-gray-400">
                        NEVTIK TOURIST
                    </h1>
                </div>
                <p className="font-mono">
                    Explore The World with NEVTIK Tourist to get saving on
                    homes, hotels, and flight
                </p>
            </section>
            <section>
                <ul className="flex text-gray-600 gap-6 mx-auto justify-center text-2xl">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                    <li>Privacy Policy</li>
                    <li>Disclaimer</li>
                </ul>
                <section>Copyright @ 2023 All Rights Reserved</section>
            </section>
        </footer>
    );
};

export default Footer;
