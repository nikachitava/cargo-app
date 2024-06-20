import { ICountries } from "../interfaces/ICountries";

interface IDisplayAddress {
    currentCountry: string;
    countries?: ICountries[];
}

export const DisplayAddress: React.FC<IDisplayAddress> = ({
    currentCountry,
    countries,
}) => {
    const country = countries?.find((c) => c.countryName === currentCountry);

    return (
        <div className="mt-8">
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat dark:text-white">
                Address:{" "}
                <span className="text-gray-700 dark:text-white">
                    {country?.address}
                </span>
            </h1>
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat dark:text-white">
                Country:{" "}
                <span className="text-gray-700 dark:text-white">
                    {country?.countryName}
                </span>
            </h1>
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat dark:text-white">
                City:{" "}
                <span className="text-gray-700 dark:text-white">
                    {country?.city}
                </span>
            </h1>
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat dark:text-white">
                State:{" "}
                <span className="text-gray-700 dark:text-white">
                    {country?.state}
                </span>
            </h1>{" "}
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat dark:text-white">
                ZIP:{" "}
                <span className="text-gray-700 dark:text-white">
                    {country?.zip}
                </span>
            </h1>
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat dark:text-white">
                Phone:{" "}
                <span className="text-gray-700 dark:text-white">
                    {country?.phone}
                </span>
            </h1>
        </div>
    );
};
