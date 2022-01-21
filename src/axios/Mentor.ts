import axios from "axios";
import { IMentor, Mentor } from "../models/IMentor";
import { User } from "../models/IUser";
import { AUTH_TOKEN } from "../utils/authController";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";



export const getMentor = async ( id: string ) => {
    try {
        const response = await axios.get(baseUrl + '/mentor', {
            params: { "id": id },
            headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, }
        })
        return response.data as Mentor
    } catch (e) {
        console.log(e)
    }
}

export const getMentorSearch = async (param:object) => {
    try {
        const response = await axios.get(baseUrl + '/mentor/search', {params:param, headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
        return response.data as IMentor
    } catch (e) {
        console.log(e)
    }
}

export const createMentor = async ( data: IMentor ) => {
    try {
        await axios.post(baseUrl + '/mentor', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
    } catch (e) {
        console.log(e)
    }

}

export const updateUser = async ( data: IMentor ) => {
    try {
        await axios.patch(baseUrl + '/mentor', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } })
    } catch (e) {
        console.log(e)
    }
}


