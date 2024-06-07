import { useState } from "react";
import login from "../assets/images/login.svg";
import CustomButton from "../components/CustomButton";
import { SingInForm } from "../components/Authorization/SingInForm";
import { SingUpForm } from "../components/Authorization/SingUpForm";

export const Authorization = () => {
    const [singin, setIsSingin] = useState(true);

    const handlePage = (value: boolean) => {
        setIsSingin(value);
    };

    return (
        <div className="max-sm:h-[80vh] max-sm:flex max-sm:items-center">
            <div className="padding-x py-5 max-sm:w-full">
                <div className="block max-lg:hidden">
                    <img src={login} alt={login} />
                </div>
                <div className="flex justify-center">
                    <CustomButton
                        title="SING IN"
                        otherStyles={`px-7 py-4 w-full ${
                            singin && "border-coral-red border-b-4"
                        }`}
                        onClick={() => handlePage(true)}
                    />
                    <CustomButton
                        title="SING UP"
                        otherStyles={`px-7 py-4 w-full ${
                            !singin && "border-coral-red border-b-4"
                        }`}
                        onClick={() => handlePage(false)}
                    />
                </div>
                {singin ? <SingInForm /> : <SingUpForm />}
            </div>
        </div>
    );
};
