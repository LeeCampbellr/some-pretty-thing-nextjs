import { cache } from "react";

const dedupedFetch = cache(async (serializedInit) => {
  const endpoint = process.env.CRAFTCMS_API_URL;

  const response = await fetch(endpoint, JSON.parse(serializedInit));

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    );
  }

  return responseBody;
});

export const fetchCraftCMS = async ({ query, variables = {}, revalidate }) => {
  const apiToken = process.env.CRAFTCMS_API_TOKEN;

  const { data } = await dedupedFetch(
    JSON.stringify({
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ query: query, variables: variables }),
      next: { revalidate },
    })
  );

  return data;
};
