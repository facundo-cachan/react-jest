import { AxiosResponse } from 'axios';
import { users } from "./utils/fetch-axios";
import type { User } from "./utils/types";

export const getUsers = async (): Promise<User[]> => {
	try {
		const { headers, data, status }: AxiosResponse = await users();
        if(status === 200 && /json/.test(headers['content-type'])) {
            return data;
        }
        return [];
	} catch (err) {
		// throw new Error();
		console.log(err);
		return [];
	}
};