import { useContext, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { UserAvatarDropDown } from "./UserAvatarDropDown";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { DarkModeContext } from "../context/darkModeContext";

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
    const [activePage, setActivePage] = useState("Home");

    const changeActivePage = (pageName: string) => {
        setActivePage(pageName);
    };

    return (
        <div className="bg-white dark:bg-light-dark">
            <header className="max-container padding-x py-5 w-full bg-white shadow-sm dark:bg-light-dark ">
                <nav className="flex justify-between items-start">
                    <Link to={"/"}>
                        <div className="text-xl font-montserrat font-bold underline text-coral-red cursor-pointer">
                            LOGISTIC
                        </div>
                    </Link>

                    <ul className="flex space-x-5 max-lg:hidden">
                        <Link to={"/"}>
                            <li
                                className={`${
                                    activePage == "Home"
                                        ? "text-dark-dark"
                                        : "text-slate-gray"
                                } font-montserrat hover:text-primary font-bold cursor-pointer dark:text-white dark:hover:text-gray-300`}
                                onClick={() => changeActivePage("Home")}
                            >
                                Home
                            </li>
                        </Link>
                        <Link to={"/services"}>
                            <li
                                className={`${
                                    activePage == "Services"
                                        ? "text-dark-dark"
                                        : "text-slate-gray"
                                } font-montserrat hover:text-primary font-bold cursor-pointer dark:text-white dark:hover:text-gray-300`}
                                onClick={() => changeActivePage("Services")}
                            >
                                Service
                            </li>
                        </Link>
                        <Link to={"/faq"}>
                            <li
                                className={`${
                                    activePage == "Faq"
                                        ? "text-dark-dark"
                                        : "text-slate-gray"
                                } font-montserrat hover:text-primary font-bold cursor-pointer dark:text-white dark:hover:text-gray-300`}
                                onClick={() => changeActivePage("Faq")}
                            >
                                FAQ
                            </li>
                        </Link>
                        <Link to={"/contact"}>
                            <li
                                className={`${
                                    activePage == "Contact"
                                        ? "text-dark-dark"
                                        : "text-slate-gray"
                                } font-montserrat hover:text-primary font-bold cursor-pointer dark:text-white dark:hover:text-gray-300`}
                                onClick={() => changeActivePage("Contact")}
                            >
                                Contact
                            </li>
                        </Link>
                        <Link to={"/about"}>
                            <li
                                className={`${
                                    activePage == "About"
                                        ? "text-dark-dark"
                                        : "text-slate-gray"
                                } font-montserrat  hover:text-primary font-bold cursor-pointer dark:text-white dark:hover:text-gray-300`}
                                onClick={() => changeActivePage("About")}
                            >
                                About
                            </li>
                        </Link>
                    </ul>

                    <div className="flex space-x-2 max-lg:hidden items-center">
                        {currentUser ? (
                            <UserAvatarDropDown roomID={currentUser.roomID} />
                        ) : (
                            <Link to={"/authorization"}>
                                <CiLogin
                                    size={24}
                                    className="cursor-pointer"
                                    color={isDarkMode ? "white" : "black"}
                                />
                            </Link>
                        )}
                        {!isDarkMode ? (
                            <FaLightbulb
                                className="cursor-pointer"
                                onClick={toggleDarkMode}
                            />
                        ) : (
                            <FaRegLightbulb
                                className="cursor-pointer"
                                onClick={toggleDarkMode}
                                color="white"
                            />
                        )}
                    </div>
                    <div className="hidden max-lg:block">
                        <GiHamburgerMenu size={24} className="cursor-pointer" />
                    </div>
                </nav>
            </header>
        </div>
    );
};
