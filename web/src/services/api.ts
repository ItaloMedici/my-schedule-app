import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000"
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

export { api }