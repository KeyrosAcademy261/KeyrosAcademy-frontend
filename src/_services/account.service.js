import Axios from "./caller.service";

let login = (credentials) => {
  return Axios.post("/users/login", credentials);
};

let Adminlogin = (credentials) => {
  return Axios.post("/users/admin/login", credentials);
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};
let saveEmail = (email) => {
  localStorage.setItem("email", email);
};

let logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};
let getToken = () => {
  return localStorage.getItem("token");
};
let AddUser = (credentials) => {
  return Axios.post("/users/signup", credentials);
};

export const accountService = {
  saveToken,
  logout,
  login,
  isLogged,
  getToken,
  Adminlogin,
  AddUser,
  saveEmail
};
