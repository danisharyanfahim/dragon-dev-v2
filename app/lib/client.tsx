import imageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import { getStaticFile } from "../api/get-static-file";

export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "ho2oc6x8",
  token:
    "skcmq8ry6gUvxxu5CPp6LKWWllzwj9YitKkkboB090jeS9YdktihxK2r8o6Aoj5nH3CIE6behaGzozcuo1ydi9QVcohykjTC4xDAnlOVsGthq73VhDZbJ3rXnkn1ywJucM0kJPzekkZRHijv3b2zH4QdSRdH5KmX1OWcOKWolAiFIgPw7iUr",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

export const sanityFetch = async <QueryString extends string>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) => {
  return client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  });
};

export const createDoc = <T extends {}, U extends T>(
  docType: string,
  data: T[],
  transform: (data: T[]) => U[]
) => {
  transform(data).forEach((doc, index) => {
    client.createIfNotExists({
      _type: docType,
      _id: index + docType,
      ...doc,
    });
  });
};

// export const uploadDoc = async <T, U extends T>(
//   docType: string,
//   transform: (data: T[]) => U[]
// ) => {
//   try {
//     const data = await getStaticFile("/app/data/language.json");
//     createDoc<T, U>("programmingLanguage", data, transform);
//   } catch (error) {
//     console.log(error);
//   }
// };
