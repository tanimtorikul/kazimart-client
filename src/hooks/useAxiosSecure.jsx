import axios from "axios";

// Create a new Axios instance
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/", // Make sure this is the correct base URL
});

const useAxiosSecure = () => {
  // request interceptor to add authorization header for every secure call to api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
