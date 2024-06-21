import { useContext, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { UserAvatarDropDown } from "./UserAvatarDropDown";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { DarkModeContext } from "../context/darkModeContext";
import { RiCloseLargeLine } from "react-icons/ri";

export const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
    const [activePage, setActivePage] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const changeActivePage = (pageName: string) => {
        setActivePage(pageName);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogOut = async () => {
        await logout();
    };

    return (
        <div className="bg-white dark:bg-light-dark max-lg:relative max-lg:z-10 max-lg:w-full">
            <header
                className={`max-container padding-x py-5 w-full bg-white shadow-sm dark:bg-light-dark ${
                    isMenuOpen ? "max-lg:h-screen max-lg:fixed" : ""
                }`}
            >
                <nav className="flex justify-between items-start max-lg:flex-col">
                    <Link to={"/"}>
                        <div
                            className="text-xl font-montserrat font-bold underline text-coral-red cursor-pointer"
                            onClick={() => changeActivePage("Home")}
                        >
                            LOGISTIC
                        </div>
                    </Link>

                    <div className={`${isMenuOpen ? "" : "max-lg:hidden"} `}>
                        <ul className="flex space-x-5 max-lg:flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 max-lg:mt-16 ">
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
                            {currentUser && (
                                <Link to={"/profile"}>
                                    <li
                                        className={`hidden max-lg:block ${
                                            activePage == "Profile"
                                                ? "text-dark-dark"
                                                : "text-slate-gray"
                                        } font-montserrat  hover:text-primary font-bold cursor-pointer dark:text-white dark:hover:text-gray-300`}
                                        onClick={() =>
                                            changeActivePage("Profile")
                                        }
                                    >
                                        Profile
                                    </li>
                                </Link>
                            )}
                            {currentUser && (
                                <li
                                    className={`hidden max-lg:block ${
                                        activePage == "Profile"
                                            ? "text-dark-dark"
                                            : "text-slate-gray"
                                    } font-montserrat  hover:text-primary font-bold cursor-pointer dark:text-white dark:hover:text-gray-300`}
                                    onClick={handleLogOut}
                                >
                                    Log Out
                                </li>
                            )}
                            {!currentUser && (
                                <Link to={"/authorization"}>
                                    <li
                                        className={`hidden max-lg:block ${
                                            activePage == "Singin"
                                                ? "text-dark-dark"
                                                : "text-slate-gray"
                                        } font-montserrat  hover:text-primary font-bold cursor-pointer dark:text-white dark:hover:text-gray-300`}
                                        onClick={() =>
                                            changeActivePage("Singin")
                                        }
                                    >
                                        Sing in
                                    </li>
                                </Link>
                            )}
                        </ul>
                    </div>

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
                    <div className="hidden max-lg:block max-lg:absolute max-lg:right-5">
                        {isMenuOpen ? (
                            <RiCloseLargeLine
                                size={24}
                                className="cursor-pointer"
                                onClick={toggleMenu}
                            />
                        ) : (
                            <GiHamburgerMenu
                                size={24}
                                className="cursor-pointer"
                                onClick={toggleMenu}
                            />
                        )}
                    </div>
                </nav>
            </header>
        </div>
    );
};
