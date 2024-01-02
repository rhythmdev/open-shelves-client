import axios from "axios";

const apiUrl = axios.create({
    baseURL: 'https://open-shelves-server.vercel.app'
})

const useApiUrl = () => {
    return apiUrl;
};

export default useApiUrl;