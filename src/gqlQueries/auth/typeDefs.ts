import { gql } from "apollo-server-core";


const authTypeDefs = gql`
type Query{
    test:String
}

scalar Date

type User {
  id: ID
  name: String
  mobile: String
  email: String
  password: String
  status: String
  created_at: Date
  updated_at: Date
}

type Mutation{
    saveMobile(userData:userInput):User
}

input userInput{
    mobile:String
    email:String
    name:String
}


`;

export default authTypeDefs;