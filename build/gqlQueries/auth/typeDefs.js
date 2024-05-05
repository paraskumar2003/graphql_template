"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const authTypeDefs = (0, apollo_server_core_1.gql) `
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
exports.default = authTypeDefs;
//# sourceMappingURL=typeDefs.js.map