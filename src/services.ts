import { AxiosResponse } from "axios";
import { users } from "./utils/fetch-axios";
import type { User } from "./utils/types";

export const getUsers = async (): Promise<User[] | undefined> => {
  const { headers, data, status }: AxiosResponse = await users();
  return status === 200 && /json/.test(headers["content-type"]) && data;
};
