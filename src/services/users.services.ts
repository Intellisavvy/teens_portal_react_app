import axios from "axios";

export function getUser() {
    return axios.get('http://localhost:3000/users/11212')
}