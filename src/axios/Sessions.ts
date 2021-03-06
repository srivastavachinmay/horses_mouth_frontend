import axios          from "axios";
import { ISessions }  from "../models/ISessions";
import { AUTH_TOKEN } from "../utils/authController";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getSession = async () => {
    try {
        const response = await axios.get(
            baseUrl + '/session', { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } });
        return response.data as ISessions;
    } catch (e) {
        console.log(e);
    }
};