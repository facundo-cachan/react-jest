import axios, { AxiosResponse } from "axios";
import type { User } from "./types";

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  timeout: 2500
});

export const users = (): Promise<AxiosResponse<User>> => {
  return instance.get("users");
};
