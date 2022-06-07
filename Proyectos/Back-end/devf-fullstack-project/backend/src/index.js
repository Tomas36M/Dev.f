import express from "express";
import { ApolloServer } from 'apollo-server-express'
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const app = express();

export default app;

const startServer = async () => {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.listen(3000, () => {
        console.log('Server running in port', 3000)
    })

}




startServer();