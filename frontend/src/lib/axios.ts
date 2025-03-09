import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "https://soniq-app-oozn.onrender.com/api" : "/api",
});
