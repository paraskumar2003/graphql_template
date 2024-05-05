"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authResolvers = {
    Query: {
        test: () => "Hi from Graphql Template."
    },
    Mutation: {
        saveMobile: (_, { userData }) => {
            try {
                console.log({ userData });
            }
            catch (err) {
                throw new Error("Error");
            }
        }
    }
};
exports.default = authResolvers;
//# sourceMappingURL=resolvers.js.map