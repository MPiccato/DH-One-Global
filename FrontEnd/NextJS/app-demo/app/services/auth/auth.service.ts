import {UserType} from "../../types/user.type";
import {httpPostPublic} from "../common/http.service";
import {LoginResponseType} from "../../types/login.type";

class authAPI {

    login =  async (username:string, password: string): Promise<LoginResponseType> => 
        httpPostPublic(`/auth/login`, {username: username, password: password});

}

const authApi = new authAPI();
export default authApi;