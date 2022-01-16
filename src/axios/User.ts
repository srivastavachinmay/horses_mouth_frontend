import axios from "axios";
import { IUser } from "../models/IUser";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getUser = async () => {
    try {
        const response = await axios.get(baseUrl + '/user', { headers: { 'Authorization': 'bearer $AUTH_TOKEN', } })
        return response.data.users as IUser
    } catch (e) {
        console.log(e)
    }
}

export const createUser = async ( data: IUser ) => {
    try {
        await axios.post(baseUrl + '/user', data, { headers: { 'Authorization': 'bearer $AUTH_TOKEN', } })
    } catch (e) {
        console.log(e)
    }
}

export const updateUser = async ( data: IUser ) => {
    try {
        await axios.patch(baseUrl + '/user', data, { headers: { 'Authorization': 'bearer $AUTH_TOKEN', } })
    } catch (e) {
        console.log(e)
    }
}

