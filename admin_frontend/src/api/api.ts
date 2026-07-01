import axios from "axios";

const api=axios.create({
  baseURL:"http://localhost:3001", 
});

api.interceptors.request.use(
  (config : any) => {
const token=localStorage.getItem("token");

if (token) {
  config.headers.token=token;
}

return config;
  },
);

export default api;