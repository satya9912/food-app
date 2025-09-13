import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenuItems from "./components/RestaurantMenuItems"
import UserContext from "./utils/context/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"

const App = () => {
        const[userName, setUserName] = useState("satya karri");
        return(
        <>
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
                <Header />
                <Outlet />
                <Footer />
        </UserContext.Provider>
        </Provider>
        </>
)
}

const router = createBrowserRouter([
            {path: '/', element: <App />,
             children: [
                {path: '/', element: <Body />},
                 {path: '/about', element: <About />},
                 {path: '/contact', element: <Contact />},
                 {path: '/cart', element: <Cart />},
                 {path: '/restaurant/:resId', element: <RestaurantMenuItems />},
                ],
             errorElement: <Error />}
        ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);



