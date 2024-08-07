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
                this.Login({email,password});
            } else {
                return userAcc;
            }
        } catch (error) {
            throw error;
        }
    }

    async Login({email,password}) {
        try {
            const userAcc = await this.account.createEmailPasswordSession(email,password)

            return userAcc;

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw error;
        }
    }

    async logOut() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: Logout");
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;