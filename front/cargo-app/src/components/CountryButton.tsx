import { ICountryButtonProps } from "../interfaces/ICountryButtonProps";

const CountryButton: React.FC<ICountryButtonProps> = ({
    countryName,
    flag,
}) => {
    return (
        <div className="flex items-center gap-4 bg-slate-600 px-5 py-2 hover:cursor-pointer hover:bg-slate-500 ease-in-out duration-300 font-montserrat">
            <h1 className="text-white">{countryName}</h1>
            {flag}
        </div>
    );
};

export default CountryButton;
