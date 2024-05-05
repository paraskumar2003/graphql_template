"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_1 = require("apollo-server");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const resolvers_1 = __importDefault(require("../gqlQueries/auth/resolvers"));
const typeDefs_1 = __importDefault(require("../gqlQueries/auth/typeDefs"));
const dotenv = require("dotenv");
dotenv.config();
const initGraphql = () => {
    try {
        let server = new apollo_server_1.ApolloServer({
            typeDefs: [
                typeDefs_1.default
            ],
            resolvers: [
                resolvers_1.default
            ],
            context: ({ req }) => {
                const { authorization } = req.headers;
                if (authorization) {
                    const token = jsonwebtoken_1.default.verify(authorization, process.env.JWT_SECRET_KEY);
                    console.log({ token });
                    if (token) {
                        return { userId: token === null || token === void 0 ? void 0 : token.id };
                    }
                    else {
                        return {};
                    }
                }
                else {
                    return {};
                }
            },
            plugins: [
                (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()
            ]
        });
        server.listen(1 + (Number(process.env.PORT)));
    }
    catch (err) {
        console.log("\n\n----------GRAPHQL ERROR------\n\n");
        console.log(err);
        console.log("\n\n----------GRAPHQL ERROR------\n\n");
    }
};
exports.default = initGraphql;
//# sourceMappingURL=graphql.js.map