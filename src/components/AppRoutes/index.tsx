import {
    useRoutes,
} from "react-router-dom";
import { CustomerRegistration } from "../../scenes/customer/customer.register";
import { Dashboard } from "../../scenes/dashboard";
import { Home } from "../../scenes/home";
import { JobsList } from "../../scenes/jobs/jobs.list";
import { JobPost } from "../../scenes/jobs/jobs.new";
import { ParentRegister } from "../../scenes/parent/parent.register";
import { Profile } from "../../scenes/profile/profile";
import { TeenRegistration } from "../../scenes/teen/teen.registration";
import { UserCard } from "../../scenes/users/UserCard";
import { Users } from "../../scenes/users/Users";
import { AppLayout } from "../Layouts/AppLayout";

export const AppRoutes = () => {
    return useRoutes([
        {
            path: 'home',
            element: <Home />
        },
        {
            path: 'register',
            children: [
                {
                    path: 'teen',
                    element: <TeenRegistration />
                },
                {
                    path: 'parent',
                    element: <ParentRegister />
                },
                {
                    path: 'customer',
                    element: <CustomerRegistration />
                }
            ]
        },
        {
            path: '/teen',
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
                {
                    path: "profile",
                    element: <Profile />,
                }
            ],
        }
    ])
}
