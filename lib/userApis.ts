import axios from "axios";

export async function getUsers(search?: string) {
    try {
        const apiurl = `https://dummyjson.com/users` + (search ? `/search?q=${search}` : "")
        const data = await axios.get(apiurl)
        return data.data.users;
    } catch (error) {
        throw (error);
    }
}