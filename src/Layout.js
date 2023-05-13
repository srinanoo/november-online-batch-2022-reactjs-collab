import { NavLink, Outlet } from "react-router-dom";

export default function LayoutJs(){
    return(
        <>
            <NavLink to='/'>Home</NavLink>
            <Outlet></Outlet>
        </>
    );
}