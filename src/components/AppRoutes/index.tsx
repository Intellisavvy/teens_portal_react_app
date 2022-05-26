import {
    useRoutes,
} from "react-router-dom";
import { About } from "../Body/About";
import { CreateAccount } from "../Body/CreateAccount";
import { Login } from "../Body/Login";
import MainNavbar from "../Navbar/MainNavbar";

export const AppRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <MainNavbar />,
            children: [
                {
                    path: "home",
                    element: <MainNavbar />,
                    children: [
                        {
                            path: "about",
                            element: <About />
                        },
                        {
                            path: "login",
                            element: <Login />
                        },
                        {
                            path: "createAccount",
                            element: <CreateAccount />
                        }
                    ]
                },
            ],
        }
    ])
}
