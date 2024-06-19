import CountryButton from "../components/CountryButton";
import { DisplayAddress } from "../components/DisplayAddress";
import { useEffect, useState } from "react";
import axios from "axios";
import { ICountries } from "../interfaces/ICountries";
import "flag-icons/css/flag-icons.min.css";

export const DisplayCountries = () => {
    const [countries, setCountries] = useState<ICountries[]>();
    const [currentCountry, setCurrentCountry] = useState<string>("Turkey");

    const fetchCountries = async () => {
        try {
            await axios
                .get("http://localhost:3000/countries")
                .then((response) => {
                    setCountries(response.data);
                });
        } catch {
            console.log("fetching data error");
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    const changeCurrentCountry = (country: string) => {
        setCurrentCountry(country);
    };

    return (
        <>
            <div className="flex gap-4 flex-wrap">
                {countries &&
                    countries.map((country) => {
                        return (
                            <CountryButton
                                key={country.countryID}
                                countryName={country.countryName}
                                flag={
                                    <span
                                        className={`fi fi-${country.ISO}`}
                                    ></span>
                                }
                                onClick={() =>
                                    changeCurrentCountry(country.countryName)
                                }
                            />
                        );
                    })}
            </div>
            <DisplayAddress
                currentCountry={currentCountry}
                countries={countries}
            />
        </>
    );
};
