import { Outlet } from "react-router-dom"
import AppHeader from "../Header"

export const AppLayout = () => {
    return (
        <div>
            <AppHeader />
            <Outlet />
            <div>footer</div>
        </div>
    )
}