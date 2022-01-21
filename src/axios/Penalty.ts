import axios          from "axios";
import { IPenalty }   from "../models/IPenalty";
import { AUTH_TOKEN } from "../utils/authController";


const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getPenalty = async () => {
    try {
        const response = await axios.get(baseUrl + '/penalty', { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
        return response.data as IPenalty
    } catch (e) {
        console.log(e)
    }
}
