import {
    useRoutes,
} from "react-router-dom";
import { Login } from "../images/Login";
import { About } from "../Body/Main/About";
import { CreateAccount } from "../Body/Main/CreateAccount";
import MainNavbar from "./Main/MainNavbar";
import { Home } from "../Body/Main/Home";

export const AppRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <MainNavbar />,
            children: [
                {
                    path: "home",
                    element: <Home />,
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
