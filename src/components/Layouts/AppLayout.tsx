import { Outlet } from "react-router-dom"

export const AppLayout = () => {
    return (
        <div>
            <h1>public layout</h1>
            <Outlet />
        </div>
    )
}