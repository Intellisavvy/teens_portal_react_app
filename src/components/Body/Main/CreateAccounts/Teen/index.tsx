import { Route, Routes } from "react-router-dom";
import TeenRegistration from "./TeenRegistration";


export default function TeenReg() {
    return (
        <Routes>
            <Route path="/teenregform" element={<TeenRegistration />} />
            <Route path="/parent" element={<TeenRegistration />} />
            <Route path="/vendor" element={<TeenRegistration />} />
        </Routes>
    );
}