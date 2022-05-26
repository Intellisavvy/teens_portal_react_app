import {
    useRoutes,
} from "react-router-dom";
import { About } from "../../scenes/about";
import { Dashboard } from "../../scenes/dashboard";
import { Home } from "../../scenes/home";
import { UserCard } from "../../scenes/users/UserCard";
import { Users } from "../../scenes/users/Users";
import { AppLayout } from "../Layouts/AppLayout";

export const AppRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    path: "home",
                    element: <Home />
                },
                {
                    path: "dashboard",
                    element: <Dashboard />
                },
                {
                    path:'aboutus',
                    element: <About/>
                },
                {
                    path: "users",
                    element: <Users />,
                    children: [
                        {
                            path: ":id",
                            element: <UserCard />
                        }
                    ]
                },
            ],
        }
    ])
}
