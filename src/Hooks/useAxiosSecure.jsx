import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'https://jewelry-shop-server-five.vercel.app'
});


const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;