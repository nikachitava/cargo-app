import { useContext } from "react";
import { DisplayCountries } from "../components/DisplayCountries";
import { AuthContext } from "../context/authContext";
import CustomButton from "../components/CustomButton";

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
            <div className="padding-x py-10 grid grid-cols-4 gap-8 max-lg:grid-cols-2">
                <CustomButton
                    title="Recived Parcels"
                    otherStyles="bg-primary rounded-lg p-4 border-2 border-slate-gray hover:bg-pale-blue ease-in-out duration-300 dark:hover:text-black dark:border-white dark:bg-blue-dark "
                />
                <CustomButton
                    title="Parcels on Way"
                    otherStyles="bg-primary rounded-lg p-4 border-2 border-slate-gray hover:bg-pale-blue ease-in-out duration-300 dark:hover:text-black dark:border-white dark:bg-blue-dark"
                />
                <CustomButton
                    title="Arrived Parcels"
                    otherStyles="bg-primary rounded-lg p-4 border-2 border-slate-gray hover:bg-pale-blue ease-in-out duration-300 dark:hover:text-black dark:border-white dark:bg-blue-dark"
                />
                <CustomButton
                    title="Parcels History"
                    otherStyles="bg-primary rounded-lg p-4 border-2 border-slate-gray hover:bg-pale-blue ease-in-out duration-300 dark:hover:text-black dark:border-white dark:bg-blue-dark"
                />
            </div>
        </section>
    );
};
