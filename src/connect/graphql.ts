import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server";
import jwt from "jsonwebtoken";
import authResolvers from "../gqlQueries/auth/resolvers";
import authTypeDefs from "../gqlQueries/auth/typeDefs";
const dotenv = require("dotenv");
dotenv.config();

const initGraphql = () => {
    try {
        let server: ApolloServer = new ApolloServer({
            typeDefs: [
                authTypeDefs
            ],
            resolvers: [
                authResolvers
            ],
            context: ({ req }) => {

                const { authorization } = req.headers;

                if (authorization) {

                    const token: any = jwt.verify(authorization, process.env.JWT_SECRET_KEY as string);

                    console.log({ token });

                    if (token) {
                        return { userId: token?.id as string }
                    } else {
                        return {};
                    }

                } else {
                    return {};
                }

            },
            plugins: [
                ApolloServerPluginLandingPageGraphQLPlayground()
            ]
        })
        server.listen(1 + (Number(process.env.PORT)));
    } catch (err) {
        console.log("\n\n----------GRAPHQL ERROR------\n\n");
        console.log(err);
        console.log("\n\n----------GRAPHQL ERROR------\n\n");
    }
}


export default initGraphql;