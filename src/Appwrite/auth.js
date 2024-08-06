import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}) {
        try {
            const userAcc = await this.account.create(ID.unique(),email,password,name);
            if(userAcc) {
                //call another method
                
            } else {
                return userAcc;
            }
        } catch (error) {
            throw error;
        }
    }

    
}

const authService = new AuthService();

export default AuthService;