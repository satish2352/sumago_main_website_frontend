import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./main components/Footer";
import Movingicon from "./components/Movingicon";
import NewNavbar from "./components/NewNavbar";

const MainLayout = () => {
    const location = useLocation();

    // Define routes where you don't want the Header/Footer
    const hideLayoutRoutes = ["/"]; // Add more if needed

    return (
        <>
            {!hideLayoutRoutes.includes(location.pathname) && <Header />}
            {!hideLayoutRoutes.includes(location.pathname) && <NewNavbar />}
            <Outlet />
            {!hideLayoutRoutes.includes(location.pathname) && <Footer />}
            <Movingicon />
        </>
    );
};

export default MainLayout;
