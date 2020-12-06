import Axios from "axios";
const baseURL = "http://localhost:3030";
const AxiosHelper = Axios.create({
  baseURL,
});

AxiosHelper.interceptors.request.use((request) => {
  if (localStorage.getItem("token")) {
    request.headers["Authorization"] =
      "Bearer " + localStorage.getItem("token");
  }
  return request;
});
AxiosHelper.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if(error?.response?.status === 401){
    localStorage.clear();
    window.location.href = '/login'
  }
  return Promise.reject(error);
});;

export default AxiosHelper;
