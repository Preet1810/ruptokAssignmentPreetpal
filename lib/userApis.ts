import axios from "axios";
import { UserProps } from "./types";
export async function getUsers(search?: string) {
    try {
        const apiurl = `https://dummyjson.com/users` + (search ? `/search?q=${search}` : "")
        const data = await axios.get(apiurl)
        return data.data.users;
    } catch (error) {
        throw (error);
    }
}

export async function createUser(values: UserProps) {
    try {
        const apiurl = `https://dummyjson.com/users/add`
        const data = await axios.post(apiurl, values)
        return data;
    } catch (error) {
        throw (error);
    }
}