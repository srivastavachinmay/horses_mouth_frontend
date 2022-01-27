import { decodeToken } from "react-jwt";

export const AUTH_TOKEN = localStorage.getItem("idtoken") as string;

export const getId = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const decodedToken = decodeToken(AUTH_TOKEN) as any;
    return decodedToken?.[ "user_id" ];
};