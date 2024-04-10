const queries = `#graphql
    getUserToken(email: String!, password: String!) : String!
    getCurrentUser : User
    getAllComponents : [Component]
    getComponentsOnrequest(lang: String, framework: String, paid: Boolean) : [Component]
    getComponentbyId(id: String!) : Component
`

export { queries }