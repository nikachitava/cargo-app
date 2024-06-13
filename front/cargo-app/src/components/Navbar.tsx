import { useContext } from "react";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const handleLogOut = async () => {
        await logout();
    };

    return (
        <header className="max-container padding-x py-5 w-full bg-white shadow-sm">
            <nav className="flex justify-between items-start ">
                <Link to={"/"}>
                    <div className="text-xl font-montserrat font-bold underline text-coral-red cursor-pointer">
                        LOGISTIC
                    </div>
                </Link>

                <ul className="flex space-x-5 max-lg:hidden">
                    <Link to={"/"}>
                        <li className="font-montserrat text-slate-gray hover:text-primary cursor-pointer">
                            Home
                        </li>
                    </Link>
                    <Link to={"/services"}>
                        <li className="font-montserrat text-slate-gray hover:text-primary cursor-pointer">
                            Service
                        </li>
                    </Link>
                    <Link to={"/faq"}>
                        <li className="font-montserrat text-slate-gray hover:text-primary cursor-pointer">
                            FAQ
                        </li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className="font-montserrat text-slate-gray hover:text-primary cursor-pointer">
                            Contact
                        </li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="font-montserrat text-slate-gray hover:text-primary cursor-pointer">
                            About
                        </li>
                    </Link>
                </ul>

                <div className="flex space-x-2 max-lg:hidden">
                    {currentUser ? (
                        <CiLogout
                            size={24}
                            className="cursor-pointer"
                            onClick={handleLogOut}
                        />
                    ) : (
                        <Link to={"/authorization"}>
                            <CiLogin size={24} className="cursor-pointer" />
                        </Link>
                    )}
                </div>
                <div className="hidden max-lg:block">
                    <GiHamburgerMenu size={24} className="cursor-pointer" />
                </div>
            </nav>
        </header>
    );
};
