import { Link } from "react-router-dom";

export const CreateAccount = () => {
    return (
        <div style={{ textAlign: 'center', marginBottom: '23rem' }}>
            <ul>
                <li>
                    <Link to='/teenregform' >Teen</Link>
                </li>
                <li>
                    <Link to="/parentregform" >Parent</Link>
                </li>
                <li>
                    <Link to="/vendorregform" >Vendor</Link>
                </li>
            </ul>
        </div>
    );
}