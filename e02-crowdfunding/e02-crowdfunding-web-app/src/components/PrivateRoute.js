import React from "react";
import { Redirect, Route, Routes } from "react-router-dom";

import Home from "./Home"
//import Layout from "./Layout";
//import Login from "./Login";

const PrivateRoute = ({ component, ...rest}) => {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default PrivateRoute;