import { createUserService ,updateUserService , loginUserService } from "../../service/user.js";
import { componentServices } from '../../service/components.js'
import { db } from '../../lib/db.js'

const queries = {

    getCurrentUser : async (_, parameters , context) => {
        if(context && context.user){
            const id = context.user.userId;
            const user = await db.user.findUnique({
                where : {
                    id
                }
            })
            return user;
        }
        else throw new Error("User not found");
    },

    getAllUsers : async () => {
        const users = await db.user.findMany();
        return users;
    },

    getAllComponents : async () => {
        const components = await componentServices.getAllComponentsService();
        return components;
    },

    getComponentbyId : async (parent, args) => {
        const component = await componentServices.getComponentbyIdservice({payload : args});
        return component
    },

    getComponentsOnrequest : async (parent, args) => {
        const components = await componentServices.getComponentsOnrequestService({payload: args});
        return components;
    }
}

const mutations = {
    createUser : async (parent, args) => {
        const result = await createUserService({payload: args});
        return result;
    },

    updateUser : async (parent, args) => {
        const result = await updateUserService({payload: args});
        return result;
    },

    getUserToken : async (parent, args) => {
        const token = await loginUserService({payload: args});
        return token;
    },

    createComponent : async (parent, args) => {
        const result = await componentServices.createComponentService({payload: args});
        return result;
    },

    updateComponent : async (parent, args) => {
        const result = await componentServices.updateComponentService({payload: args});
        return result;
    },

    deleteComponent : async (parent, args) => {
        const result = await componentServices.deleteComponentService({payload: args});
        return result;

    }
}

const resolvers = { mutations , queries  }

export default resolvers;
