import { Link } from "react-router-dom"

export const Home = ()=> {
    return <div>
        <h2>Teens portal</h2>
        <Link to={'register/teen'} >Register Teen</Link>
        <Link to={'register/parent'} >Register Parent</Link>
        <Link to={'register/customer'} >Register Customer</Link>
    </div>
}