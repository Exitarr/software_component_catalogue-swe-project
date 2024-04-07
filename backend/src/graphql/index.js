import { ApolloServer } from '@apollo/server';
import { Components } from './components/index.js';

const typeDefs = `
    ${Components.typeDefs}

    type Query {
        ${Components.queries}
    }

    type Mutation {
        ${Components.mutations}
    }
`
const resolvers = {
    Query : {
        ...Components.resolvers.queries,
    },
    Mutation : {
        ...Components.resolvers.mutations,
    }    
}

async function ApolloServerCreations(){
    const server = new ApolloServer({
        typeDefs : typeDefs,
        resolvers : resolvers
    })

    await server.start();

    return server;
}



export { ApolloServerCreations };