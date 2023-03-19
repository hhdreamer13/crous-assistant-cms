import sanityClient from "../sanityClient";

const fetchData = async ({ queryKey }) => {
  const service = queryKey[0];
  const query = `
      *[_type == "${service}"]{
        _id,
        title,
        paragraphs[]{
          _key,
          title,
          text
        }
      }
      `;
  const result = await sanityClient.fetch(query);
  return result;
};

export default fetchData;
