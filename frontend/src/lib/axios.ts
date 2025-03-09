import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "https://soniq-appp.onrender.com/api" : "/api",
});
