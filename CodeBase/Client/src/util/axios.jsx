import axios from "axios";

const serverURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
	baseURL: serverURL,
	withCredentials: true,
});

export default instance;
