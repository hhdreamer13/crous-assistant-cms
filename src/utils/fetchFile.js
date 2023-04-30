import sanityClient from "../sanityClient";

const fetchFile = async () => {
  //   const fileAsset = queryKey[0];
  const query = `*[_type == "fileAsset"] | order(_updatedAt desc) {_id, title, description, "fileUrl": file.asset->url}`;
  const result = await sanityClient.fetch(query);
  return result;
};

export default fetchFile;
