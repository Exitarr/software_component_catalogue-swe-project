import { createUserService , loginUserService } from "../../service/user.js";
import { createComponentService , getAllComponentsService , getComponentsOnrequestService } from "../../service/components.js";
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
        const components = await getAllComponentsService();
        return components;
    },

    getComponentsOnrequest : async (parent, args) => {
        const components = await getComponentsOnrequestService({payload: args});
        return components;
    }
}

const mutations = {
    createUser : async (parent, args) => {
        const result = await createUserService({payload: args});
        return result;
    },

    createComponent : async (parent, args) => {
        const result = await createComponentService({payload: args});
        return result;
    }
}

const resolvers = { mutations , queries  }

export default resolvers;
