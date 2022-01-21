import axios from "axios";
import { IWithdrawals } from "../models/IWithdrawals";
import { AUTH_TOKEN } from "../utils/authController";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getWithdrawals = async () => {
    try {
        const response = await axios.get(baseUrl + '/withdrawal', { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
        return response.data as IWithdrawals
    } catch (e) {
        console.log(e)
    }
}

export const createWithdrawals = async ( data: IWithdrawals ) => {
    try {
        await axios.post(baseUrl + '/withdrawal', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
    } catch (e) {
        console.log(e)
    }
}
