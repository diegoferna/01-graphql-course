import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import { context } from './graphql/context';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4001).then(({ url }) => {
  console.log(`🚀 Server is running on ${url}`);
});
