import {ILoginPayload, IUserAllQuery} from "../interface/request";
import axiosClient from "./axios";
import {IUserAllResponse} from "../interface/response";
export default {
    allUser : async (query:IUserAllQuery):Promise<IUserAllResponse|Error> =>{
        try{
            const res = await axiosClient.get("/users",{params:query})

            return res.data.data as IUserAllResponse
        }catch (e:any){
            return Error(e.response.data.message)
        }
    },
}
