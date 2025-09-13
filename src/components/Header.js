import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [isLoggedin , setLoggedIn] = useState(false);
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const toggleLogin = () => {
        setLoggedIn(!isLoggedin);
    }
    const cartItems = useSelector((store) => store.cart.items);
    return(
    <div className="header-container flex justify-between items-center">

        <div className="logo-container w-40" >
            <Link to={"/"}>
            <img src={LOGO_URL} className="w-full" />
            </Link>
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
                <li>
                <Link to="/cart">Cart - {cartItems.length} items</Link>
                </li>
            </ul>

            <h3>{onlineStatus ? "🟢" : "🔴"}</h3>

            <button onClick={toggleLogin}>
                {isLoggedin ? "Logout" : "Login"}
            </button>
            <p className="font-bold">{loggedInUser}</p>
        </nav>

    </div>
)}

export default Header;