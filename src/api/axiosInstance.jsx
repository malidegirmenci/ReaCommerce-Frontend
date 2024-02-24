import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://madtech.up.railway.app/api/v1/ecommerce',
});


export default axiosInstance;