import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { DarkModeContext } from "../context/darkModeContext";

interface IUserAvatar {
    roomID: number;
}

export const UserAvatarDropDown: React.FC<IUserAvatar> = ({ roomID }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<any>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: any) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const { logout } = useContext(AuthContext);
    const { isDarkMode } = useContext(DarkModeContext);

    const handleLogOut = async () => {
        await logout();
    };

    return (
        <div
            className="relative inline-block text-left cursor-pointer"
            ref={dropdownRef}
        >
            <div
                className="flex justify-center items-center gap-1"
                onClick={toggleDropdown}
            >
                <span className="font-montserrat font-semibold dark:text-white">
                    {roomID}
                </span>
                {!isOpen ? (
                    <IoIosArrowDropdown
                        color={isDarkMode ? "white" : "black"}
                    />
                ) : (
                    <IoIosArrowDropup color={isDarkMode ? "white" : "black"} />
                )}
            </div>
            {/* Dropdown menu */}
            {isOpen && (
                <div
                    id="DropDown"
                    className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700 shadow-lg"
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <p className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">
                                Balance:{" "}
                                <span className="font-bold text-green-400">
                                    2.4$
                                </span>
                            </p>
                        </li>
                        <Link to={"/profile"}>
                            <li>
                                <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Profile
                                </p>
                            </li>
                        </Link>

                        <li onClick={handleLogOut}>
                            <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Log Out
                            </p>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
