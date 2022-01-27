import axios               from "axios";
import { IMentor, Mentor } from "../models/IMentor";
import { AUTH_TOKEN }      from "../utils/authController";
import { components }      from "../utils/shivamBhadwa";

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

export const getMentor = async ( id: string ) => {
    try {
        const response = await axios.get(baseUrl + '/mentor', {
            params: { "id": id },
            headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, }
        });
        return response.data as Mentor;
    } catch (e) {
        console.log(e);
    }
};

export const getMentorSearch = async ( param: {
    count?: components["parameters"]["CountParam"];
    includeTotal?: components["parameters"]["IncludeTotal"],
    page?: components["parameters"]["PageParam"],
    uniName?: string,
    name?: string,
    countryOfStudy?: string,
    countryOfOrigin?: string,
    /** can contain multiple comma seperated values */
    major?: components["schemas"]["Major"],
    /** can contain multiple comma seperated values */
    status?: components["schemas"]["Status"],
    /** can contain multiple comma seperated values */
    degree?: components["schemas"]["Degree"],
} ) => {
    try {
        const response = await axios.get(
            baseUrl + '/mentor/search', { params: param, headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } });
        return response.data as IMentor;
    } catch (e) {
        console.log(e);
    }
};

export const createMentor = async ( data: IMentor ) => {
    try {
        await axios.post(baseUrl + '/mentor', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } });
    } catch (e) {
        console.log(e);
    }
    
};

export const updateUser = async ( data: IMentor ) => {
    try {
        await axios.patch(baseUrl + '/mentor', data, { headers: { 'Authorization': `bearer ${AUTH_TOKEN}`, } });
    } catch (e) {
        console.log(e);
    }
};


