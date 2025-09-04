import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
    const [isLoggedin , setLoggedIn] = useState(false);
    const onlineStatus = useOnlineStatus();
    const toggleLogin = () => {
        setLoggedIn(!isLoggedin);
    }
    return(
    <div className="header-container flex justify-between items-center">

        <div className="logo-container w-40">
                <img src={LOGO_URL} className="w-full" />
        </div>
        <nav className="flex gap-4 px-4">
            <ul className="flex gap-4">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <h3>{onlineStatus ? "🟢" : "🔴"}</h3>

            <button onClick={toggleLogin}>
                {isLoggedin ? "Logout" : "Login"}
            </button>
        </nav>

    </div>
)}

export default Header;