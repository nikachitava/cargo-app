import { CiLogin } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";

export const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>Logistic</div>

            <ul className="flex space-x-5">
                <li className="font-palanquin text-slate-gray">Home</li>
                <li className="font-montserrat">Service</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>About</li>
            </ul>

            <div>
                <CiLogin />
                <IoMdPersonAdd />
            </div>
        </div>
    );
};
