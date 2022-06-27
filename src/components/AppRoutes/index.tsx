import {
    useRoutes,
} from "react-router-dom";
import { CustomerRegistration } from "../../scenes/customer/customer.register";
import { Dashboard } from "../../scenes/dashboard";
import { Home } from "../../scenes/public/home";
import { JobsList } from "../../scenes/jobs/jobs.list";
import { Profile } from "../../scenes/common/profile/profile";
import { UserCard } from "../../scenes/users/UserCard";
import { Users } from "../../scenes/users/Users";
import { AppLayout } from "../Layouts/AppLayout";
import { PublicLayout } from "../../scenes/public/public.layout";
import { AppliedJobs } from "../../scenes/teen/appliedJobs/appliedJobs";
import { JobSearch } from "../../scenes/teen/jobSearch/jobSearch";
import ParentRegister from "../../scenes/parent/parent.register.form";
import TeenRegistration from "../../scenes/teen/teen.registration";
import JobPostForm from "../../scenes/VendorReg/JobPostForm";

export const AppRoutes = () => {
    return useRoutes([
        {
            path: '',
            element: <PublicLayout />,
            children: [{
                path: '/',
                element: <Home />,
            }]
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
            path: 'teen',
            element: <AppLayout />,
            children: [
                {
                    path: "jobs",
                    element: <AppliedJobs />
                },
                {
                    path: "search",
                    element: <JobSearch />
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
        },
        {
            path:'vendor',
            element: <AppLayout />,
            children:[
                {
                    path: "jobs",
                    element: <JobsList />
                },
                {
                    path: "jobpost",
                    element: <JobPostForm />
                },
            ]
        }
    ])
}
