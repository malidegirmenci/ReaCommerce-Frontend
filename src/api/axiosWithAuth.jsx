import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("Token");

    return axios.create({
        baseURL : "https://workintech-fe-ecommerce.onrender.com/",
        headers : {
            Authorization: token,
        },
    });
}

export default axiosWithAuth;