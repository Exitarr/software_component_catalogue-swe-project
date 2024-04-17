import {gql} from '@apollo/client';

const CREATE_USER = gql`
    mutation CreateUser($userName : String! , $name : String! , $email : String! , $password : String!){
        createUser(userName : $userName ,name : $name , email : $email , password : $password)
    }
`

const LOGIN_USER = gql`
    mutation getUserToken($email: String! , $password: String!){
        getUserToken(email: $email, password: $password)
    }
`
const CREATE_COMPONENT = gql`
    mutation CreateComponent($name: String! , $description: String! , $lang: String! , $paid : Boolean! , $price: Float! , $framework: String! , $code : String!){
        createComponent(name: $name , description: $description , lang: $lang , paid: $paid , price: $price , framework: $framework , code: $code)
    }    
`

const MAKE_ADMIN = gql`
    mutation MakeAdmin($id: String!){
      updateUser(id: $id)
    }
`

const UPDATE_COMPONENT = gql`
    mutation UpdateComponent($id: String! , $name: String! , $description: String! , $lang: String!, $paid : Boolean! , $price: Float! , $framework: String! , $code : String!){
        updateComponent(id: $id , name: $name , description: $description , lang: $lang , paid: $paid , price: $price , framework: $framework , code: $code)
    }
`

const DELETE_COMPONENT = gql`
    mutation DeleteComponent($id: String!){
        deleteComponent(id: $id)
    }
`

const mutations = {
    CREATE_USER,
    LOGIN_USER,
    CREATE_COMPONENT,
    MAKE_ADMIN,
    UPDATE_COMPONENT,
    DELETE_COMPONENT
}

export { mutations }