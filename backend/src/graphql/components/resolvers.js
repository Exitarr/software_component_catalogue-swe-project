import { createUserService , loginUserService } from "../../service/user.js";
import { componentServices } from '../../service/components.js'
import { db } from '../../lib/db.js'

const queries = {
    getUserToken : async (parent, args) => {
        const token = await loginUserService({payload: args});
        return token;
    },

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

    getAllComponents : async () => {
        const components = await componentServices.getAllComponentsService();
        return components;
    },

    getComponentbyId : async () => {
        const component = await componentServices.getComponentbyIdservice();
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
