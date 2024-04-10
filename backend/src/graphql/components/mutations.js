export const mutations = `#graphql
    createUser(userName: String!, name: String!, email: String!, password: String!): String
    createComponent(name: String!, lang: String!, framework: String!, paid: Boolean!, price: Float, content: String!): String
    updateComponent(id : String, name: String, lang: String, framework: String, paid: Boolean, price: Float, content: String): String
    deleteComponent(id : String): String
`