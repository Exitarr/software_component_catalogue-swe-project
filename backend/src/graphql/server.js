const { ApolloServer } = require('@apollo/server');

const typeDefs = `
    type Query {
        hello : String
    }
`
const resolvers = {
    Query : {
        hello : () => 'Hello World'
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

module.exports = { ApolloServerCreations };
