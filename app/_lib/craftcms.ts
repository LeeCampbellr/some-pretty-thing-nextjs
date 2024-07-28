import { cache } from "react";

const dedupedFetch = cache(async (serializedInit: string) => {
  const endpoint = process.env.CRAFTCMS_API_URL;

  if (!endpoint) {
    throw new Error(
      "CRAFTCMS_API_URL is not defined in the environment variables"
    );
  }

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

export const fetchCraftCMS = async ({
  query,
  variables = {},
  revalidate,
}: {
  query: string;
  variables?: any;
  revalidate?: any;
}) => {
  const apiToken = process.env.CRAFTCMS_API_TOKEN;

  const { data } = await dedupedFetch(
    JSON.stringify({
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query, variables: variables }),
      next: { revalidate },
    })
  );

  return data;
};
