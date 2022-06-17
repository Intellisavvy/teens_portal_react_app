import {
    useRoutes,
} from "react-router-dom";
import { Dashboard } from "../../scenes/dashboard";
import { Home } from "../../scenes/home";
import { JobsList } from "../../scenes/jobs/jobs.list";
import { JobPost } from "../../scenes/jobs/jobs.new";
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
                    path: "jobs",
                    element: <JobsList />
                },
                {
                    path: "jobpost",
                    element: <JobPost />
                },
                {
                    path: "home",
                    element: <Home />
                },
                {
                    path: "dashboard",
                    element: <Dashboard />
                },
                {
                    path: "dashboard",
                    element: <Dashboard />
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
