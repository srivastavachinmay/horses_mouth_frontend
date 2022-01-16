import axios from "axios";
import { IMentor } from "../models/IMentor";
import { IUser } from "../models/IUser";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getMentor = async ( id: string ) => {
    try {
        const response = await axios.get(baseUrl + '/mentor', {
            params: { "id": id },
            headers: { 'Authorization': 'bearer $AUTH_TOKEN', }
        })
        return response.data as IUser
    } catch (e) {
        console.log(e)
    }
}

export const getMentorSearch = async () => {
    try {
        const response = await axios.get(baseUrl + '/mentor/search', {params:{}, headers: { 'Authorization': 'bearer $AUTH_TOKEN', } })
        return response.data as IMentor
    } catch (e) {
        console.log(e)
    }
}

export const createMentor = async ( data: IMentor ) => {
    try {
        await axios.post(baseUrl + '/mentor', data, { headers: { 'Authorization': 'bearer $AUTH_TOKEN', } })
    } catch (e) {
        console.log(e)
    }

}

export const updateUser = async ( data: IMentor ) => {
    try {
        await axios.patch(baseUrl + '/mentor', data, { headers: { 'Authorization': 'bearer $AUTH_TOKEN', } })
    } catch (e) {
        console.log(e)
    }
}


