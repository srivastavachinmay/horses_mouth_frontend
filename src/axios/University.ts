import axios           from "axios";
import { IUniversity } from "../models/IUniversity";
import { AUTH_TOKEN }  from "../utils/authController";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getUniversity = async () => {
    try {
        const response = await axios.get(
            baseUrl + '/university', { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } });
        return response.data as IUniversity;
    } catch (e) {
        console.log(e);
    }
};

export const createUniversity = async ( data: IUniversity ) => {
    try {
        await axios.post(baseUrl + '/university', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } });
    } catch (e) {
        console.log(e);
    }
};