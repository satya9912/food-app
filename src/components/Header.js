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
    <div className="header-container flex justify-between">
        <div className="left-section">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
        </div>
        <div className="right-section">
                <ul>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/about"}><li>About</li></Link>
                    <Link to={"/contact"}><li>Contact</li></Link>
                </ul>
                <h3>{onlineStatus ? "🟢" : "🔴"}</h3>
                <button onClick={toggleLogin}>{isLoggedin ? "Logout" : "Login"}</button>
        </div>
    </div>
)}

export default Header;