import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Root = () => {
    const location = useLocation();
    const isAuthorizationPage = location.pathname === "/authorization";

    return (
        <>
            {!isAuthorizationPage && <Navbar />}
            <Outlet />
        </>
    );
};
