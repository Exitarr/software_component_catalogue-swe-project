import { gql } from '@apollo/client';

const GET_USER = gql`
     query GetCurrentUser{
        getCurrentUser{
            id
            userName
            name
            email
            role
        }
     }
`

const GET_STORE_COMPONENTS = gql`
    query GetStoreComponents{
        getAllComponents{
            id
            name
            lang
            framework
            description
            paid 
            price
        }
    }
`

const GET_COMPONENT_BYID = gql`
   query GetCompById($id: String!){
        getComponentbyId(id: $id){
            name
            lang
            framework
            paid
            price
            description
            code
        }
   }
`

const GET_COMPONENTS_ON_REQUEST_QUERY = gql`
  query GetComponentsOnRequest($lang: String, $framework: String, $paid: Boolean) {
    getComponentsOnrequest(lang: $lang, framework: $framework, paid: $paid) {
      id
      name
      lang
      framework
      paid
      price
      description
    }
  }
`;

const queries = {
    GET_USER,
    GET_STORE_COMPONENTS,
    GET_COMPONENT_BYID,
    GET_COMPONENTS_ON_REQUEST_QUERY
}

export { queries }