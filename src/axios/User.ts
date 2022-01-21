import axios          from "axios";
import { User }       from "../models/IUser";
import { AUTH_TOKEN } from "../utils/authController";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getUser = async ( param?: object|undefined ) => {
    try {
        const response = await axios.get(baseUrl + '/user', {
            params: param,
            headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, }
        })
        return response.data.users as User
    } catch (e) {
        console.log(e)
    }
}

export const createUser = async ( data: User ) => {
    try {
        await axios.post(baseUrl + '/user', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
    } catch (e) {
        console.log(e)
    }
}

export const updateUser = async ( data: User ) => {
    try {
        await axios.patch(baseUrl + '/user', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
    } catch (e) {
        console.log(e)
    }
}

