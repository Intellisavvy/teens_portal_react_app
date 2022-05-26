import { Link } from "react-router-dom"

export const Dashboard = ()=> {
    return <div>dashbaord

        <Link to={'/users'}>Go to Users</Link>
    </div>
}