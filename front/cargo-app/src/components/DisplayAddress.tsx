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
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat">
                Address:{" "}
                <span className="text-gray-700">{country?.address}</span>
            </h1>
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat">
                Country:{" "}
                <span className="text-gray-700">{country?.countryName}</span>
            </h1>
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat">
                City: <span className="text-gray-700">{country?.city}</span>
            </h1>
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat">
                State: <span className="text-gray-700">{country?.state}</span>
            </h1>
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat">
                ZIP: <span className="text-gray-700">{country?.zip}</span>
            </h1>
            <h1 className="text-gray-500 text-lg font-semibold font-montserrat">
                Phone: <span className="text-gray-700">{country?.phone}</span>
            </h1>
        </div>
    );
};
