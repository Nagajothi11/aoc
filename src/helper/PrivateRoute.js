import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = () => {
    let location = useLocation();
    let path = location.pathname.split('/')[2]

    return (
        <Outlet />
    )
}

export default PrivateRoute;