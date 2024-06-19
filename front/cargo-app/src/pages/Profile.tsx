import { TR } from "country-flag-icons/react/3x2";
import CountryButton from "../components/CountryButton";
import { DisplayAddress } from "../components/DisplayAddress";

export const Profile = () => {
    return (
        <section className="">
            <div className="padding-x py-8 w-full">
                <h1 className="text-center font-palanquin font-bold text-2xl">
                    User Control Panel
                </h1>
            </div>
            <div className="bg-white-400">
                <div className="max-container padding-x py-8 flex justify-between gap-40">
                    <div>
                        <div className="flex gap-4 flex-wrap">
                            <CountryButton
                                countryName={"Turkey"}
                                flag={
                                    <TR title="Turkey" className="w-[20px]" />
                                }
                            />
                            <CountryButton
                                countryName={"Turkey"}
                                flag={
                                    <TR title="Turkey" className="w-[20px]" />
                                }
                            />
                            <CountryButton
                                countryName={"Turkey"}
                                flag={
                                    <TR title="Turkey" className="w-[20px]" />
                                }
                            />
                            <CountryButton
                                countryName={"Turkey"}
                                flag={
                                    <TR title="Turkey" className="w-[20px]" />
                                }
                            />
                            <CountryButton
                                countryName={"Turkey"}
                                flag={
                                    <TR title="Turkey" className="w-[20px]" />
                                }
                            />
                            <CountryButton
                                countryName={"Turkey"}
                                flag={
                                    <TR title="Turkey" className="w-[20px]" />
                                }
                            />
                        </div>
                        <DisplayAddress />
                    </div>
                </div>
            </div>
        </section>
    );
};
