import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
