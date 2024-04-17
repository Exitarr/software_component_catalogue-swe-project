import express from 'express';
import cors from 'cors';
import { ApolloServerCreations } from './graphql/index.js';
import { expressMiddleware } from '@apollo/server/express4';
import { decodeJWTtoken } from './service/user.js';


async function init() {

    const app = express();

    const PORT = process.env.PORT || 5000;

    app.use(express.json());
    app.use(cors());

    app.get('/',(req , res) => {
        res.send('server is running')
    })

    app.use("/graphql", expressMiddleware(await ApolloServerCreations(), {
        context : async ({req}) => {
            const token = req.headers.authorization;
            try {
                const user = decodeJWTtoken(token)
                return { user };
            }
            catch(error){
                return {}
            }
        }
    }));


    app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) });
}

init();



