import { Route, Routes } from "react-router-dom";
// import { Login } from "../../Login";
import ParentRegistration from "./Parent/ParentRegistration";
import TeenRegistration from "./Teen/TeenRegistration";
import Signin from "../../../Login";


export default function TeenReg() {
    return (
        <Routes>
            <Route path="/teenregform" element={<TeenRegistration />} />
            <Route path="/parentregform" element={<ParentRegistration />} />
            <Route path="/vendorregform" element={<TeenRegistration />} />
        </Routes>
    );
}