//在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发
import { User } from "../screens/project-list/search-panel";
import { http } from "./http";
import { useAuth } from "../context/auth-constext";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return http(`login`, { method: "POST", data }).then(handleUserResponse);
};

export const register = (data: { username: string; password: string }) => {
  return http(`register`, { method: "POST", data }).then(handleUserResponse);
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
