import { Button } from "@mui/material"
import { Outlet } from "react-router-dom"
import { getUser } from "../../services/users.services"

export const AppLayout = () => {

    const getAuth = ()=> {

        getUser().then(resp => {
            console.log(resp)
        })
    }
    return (
        <div>
            <h1>thi is header</h1>
            <Button onClick={getAuth}>Call API</Button>
            <Outlet />

            <footer>footer </footer>
        </div>
    )
}