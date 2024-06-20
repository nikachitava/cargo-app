import { useContext } from "react";
import { DisplayCountries } from "../components/DisplayCountries";
import { AuthContext } from "../context/authContext";

export const Profile = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <section>
            <div className="padding-x py-8 w-full dark:bg-dark-dark">
                <h1 className="text-center font-palanquin font-bold text-2xl dark:text-white">
                    👋 Hello, {currentUser?.name}
                </h1>
                <h1 className="text-center font-palanquin font-bold text-2xl dark:text-white">
                    User Control Panel
                </h1>
            </div>
            <div className="bg-white-400 shadow-lg dark:bg-dark-dark">
                <div className="max-container padding-x py-14 flex flex-col justify-between dark:bg-blue-dark">
                    <DisplayCountries />
                </div>
            </div>
        </section>
    );
};
