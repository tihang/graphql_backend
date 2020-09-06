const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

// MongoDB dependencies
const { MONGO_DB } = require("./config");

// Import GraphQL dependencies
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

// Connect to DB and start server.
mongoose
  .connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    return server.listen();
  })
  .then((res) => {
    console.log(`Server started on ${res.url}`);
  });
