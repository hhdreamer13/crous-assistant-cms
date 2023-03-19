import sanityClient from "../sanityClient";

const fetchMenu = async ({ queryKey }) => {
  const menu = queryKey[0];

  const query = `
  *[_type == "${menu}"]{
    _id,
    title,
    items[]->{
      _id,
      title
    }
  }
      `;
  const result = await sanityClient.fetch(query);
  return result;
};

export default fetchMenu;
