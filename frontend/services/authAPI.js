import axios from "axios";
import { URL_LOGIN } from "../config";

function authenticate(credentials) {
    return axios.post(URL_LOGIN, credentials)
        .then(res => res.data)
        .then(data => {
            window.localStorage.setItem("authToken", data.jwt)
            window.localStorage.setItem("username", data.user.username)
            axios.defaults.headers["Authorization"] = "Bearer" + data.jwt
        })
}

export default {
    authenticate
}