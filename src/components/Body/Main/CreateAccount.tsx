import { Link } from "react-router-dom";
import TeenReg from "./CreateAccounts/Teen";




export const CreateAccount = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/teenregform' >Teen</Link>
                </li>
                <li>
                    <Link to="/parent" >Parent</Link>
                </li>
                <li>
                    <Link to="/vendor" >Vendor</Link>
                </li>
            </ul>
        </div>
    );
}