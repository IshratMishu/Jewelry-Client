import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://jewelry-shop-server-five.vercel.app'
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
