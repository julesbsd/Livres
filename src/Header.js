import React, { useState } from "react";
import Home from './Home';
import Profile from './Profile';
import Livres from './Livres';
import SearchBook from './BookSearch';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";

export default function Example() {
    const [openNav, setOpenNav] = React.useState(false);

    const [activeComponent, setActiveComponent] = useState("Home");

    const handleButtonClick = (component) => {
        setActiveComponent(component);
    };
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <button onClick={() => handleButtonClick("Home")} className="flex items-center">
                    Home
                </button>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <button onClick={() => handleButtonClick("BookSearch")} className="flex items-center">
                    Book Search
                </button>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <button onClick={() => handleButtonClick("Livres")} className="flex items-center">
                    Livres
                </button>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <button onClick={() => handleButtonClick("Profile")} className="flex items-center">
                    users
                </button>
            </Typography>
        </ul>
    );

    return (
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Les livres
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                    </div>
                </div>
            </Navbar>
            <div className="flex flex-col min-h-screen">
                {activeComponent === "Home" ? <Home /> : activeComponent === "Profile" ? <Profile /> : activeComponent === "Livres" ? <Livres /> : activeComponent === "BookSearch" ? <SearchBook /> : <h1>NON</h1>}
            </div>
        </>
    );

}