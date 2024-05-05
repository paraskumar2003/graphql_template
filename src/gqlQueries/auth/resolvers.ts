

const authResolvers = {
    Query: {
        test: () => "Hi from Graphql Template."
    },
    Mutation: {
        saveMobile: (_: any, { userData }: any) => {
            try {
                console.log({ userData });
            } catch (err) {
                throw new Error("Error");
            }
        }
    }
}

export default authResolvers;