const queries = `#graphql
    getCurrentUser : User
    getAllUsers : [User]
    getAllComponents : [Component]
    getComponentsOnrequest(lang: String, framework: String, paid: Boolean) : [Component]
    getComponentbyId(id: String!) : Component
`

export { queries }