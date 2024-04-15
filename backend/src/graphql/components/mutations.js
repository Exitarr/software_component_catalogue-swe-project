export const mutations = `#graphql
    createUser(userName: String!, name: String!, email: String!, password: String!): String
    updateUser(id: String): String
    getUserToken(email: String!, password: String!) : String!
    createComponent(name: String!, lang: String!, framework: String!, paid: Boolean!, price: Float, description : String! , code : String!): String
    updateComponent(id : String, name: String, lang: String, framework: String, paid: Boolean, price: Float, description : String! , code : String!): String
    deleteComponent(id : String): String
`