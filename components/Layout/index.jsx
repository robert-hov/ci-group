import React from "react";
import Footer from "./Footer";
import Header from "@/components/Layout/Header";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
    </>
    );
};

export default Layout;
