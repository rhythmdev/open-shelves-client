import axios from "axios";

const apiUrl = axios.create({
    baseURL: 'http://localhost:8080'
})

const useApiUrl = () => {
    return apiUrl;
};

export default useApiUrl;