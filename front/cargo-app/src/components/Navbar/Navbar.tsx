import { CiLogin } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";

export const Navbar = () => {
    return (
        <div>
            <div>Logistic</div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <div>
                <CiLogin />
                <IoMdPersonAdd />
            </div>
        </div>
    );
};
