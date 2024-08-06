const getBaseUrl = () =>
  process.env.NODE_ENV === "development"
    ? "https://82y68p-3000.csb.app"
    : `https://${process.env.VERCEL_URL}`;

export default getBaseUrl;
