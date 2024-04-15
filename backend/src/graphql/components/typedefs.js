const typeDefs = `#graphql
    type User {
        id: ID!
        userName: String!
        name : String!
        email: String!
        password: String!
        role : String!
    }
    type Component {
        id : ID!
        name : String!
        lang : String!
        framework : String!
        paid : Boolean!
        price : Float
        description : String
        code : String!
    }
`

export { typeDefs };
