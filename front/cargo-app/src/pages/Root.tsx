import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Root = () => {
    const location = useLocation();
    const isAuthorizationPage = location.pathname === "/authorization";

    return (
        <div className="dark:bg-dark-dark">
            {!isAuthorizationPage && <Navbar />}
            <Outlet />
        </div>
    );
};
