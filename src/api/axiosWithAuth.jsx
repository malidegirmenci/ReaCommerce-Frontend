import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("Token");

    return axios.create({
        baseURL : 'https://madtech.up.railway.app/api/v1/ecommerce',
        headers : {
            Authorization: `Bearer ${token}`,
        },
    });
}

export default axiosWithAuth;