import React from "react";
import LandingImage from "../../../images/tetiana-zatsarynna-zppTyTx3da4-unsplash.jpg";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
const Header = () => {
    // const imageUrl = "/public/images/1680686202.anies-baswedan.jpeg";

    return (
        <div
            className={`h-screen w-screen bg-cover bg-center bg-no-repeat `}
            style={{
                backgroundImage: `url(${LandingImage})`,
            }}
        >
            <Navbar
                fluid={true}
                rounded={true}
                style={
                    {
                        // backgroundColor: "transparent",
                        // display: "flex",
                        // justifyContent: "space-evenly",
                        // alignItems: "center",
                        // width: "100%",
                    }
                }
                className="grid grid-flow-row grid-cols-3 w-full items-center bg-[#000000] bg-opacity-10"
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                            <Avatar
                                alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded={true}
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/navbars" active={true}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">About</Navbar.Link>
                    <Navbar.Link href="/navbars">Services</Navbar.Link>
                    <Navbar.Link href="/navbars">Pricing</Navbar.Link>
                    <Navbar.Link href="/navbars">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
