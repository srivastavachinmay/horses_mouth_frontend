import axios            from "axios";
import { IWithdrawls } from "../models/IWithdrawls";
import { AUTH_TOKEN }   from "../utils/authController";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getWithdrawls = async ( state: string ) => {
    try {
        const response = await axios.get(
            baseUrl + '/withdrawl', { params: { state: state }, headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } });
        return response.data as IWithdrawls;
    } catch (e) {
        console.log(e);
    }
};

export const createWithdrawals = async ( data: IWithdrawls ) => {
    try {
        await axios.post(baseUrl + '/withdrawl', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } });
    } catch (e) {
        console.log(e);
    }
};
