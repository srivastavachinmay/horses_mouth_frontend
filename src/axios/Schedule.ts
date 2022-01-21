import axios from "axios";
import { ISchedule } from "../models/ISchedule";
import { AUTH_TOKEN } from "../utils/authController";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getSchedule = async () => {
    try {
        const response = await axios.get(baseUrl + '/schedule', { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
        return response.data as ISchedule
    } catch (e) {
        console.log(e)
    }
}

export const updateSchedule = async ( data: ISchedule ) => {
    try {
        await axios.patch(baseUrl + '/schedule', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
    } catch (e) {
        console.log(e)
    }
}
