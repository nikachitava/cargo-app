import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SingInForm from "../components/Authorization/SingInForm";
import SingUpForm from "../components/Authorization/SingUpForm";

export const Authorization = () => {
    const [singin, setIsSingin] = useState(true);

    const handlePage = (value: boolean) => {
        setIsSingin(value);
    };

    return (
        <div className="max-container w-[500px] padding-x py-5">
            <div>
                <div className="flex">
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
