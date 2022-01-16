import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }) {
  const endpoint = "https://dev.someprettything.com/api";

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer BcAiqvlKmVRt1W3ZG_Jj-Y8qdEh7l8PV`,
    },
  });
  return client.request(query, variables);
}
