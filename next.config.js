module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  env: {
    environment: process.env.ENVIRONMENT,
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
    shopifyApiKey: process.env.SHOPIFY_API_KEY,
    shopifyApiSecret: process.env.SHOPIFY_API_SECRET,
    shopUrl: process.env.SHOP_URL,
    scopes: process.env.SCOPES,
    host: process.env.HOST,
    stateLogger: process.env.STATE_LOGGER,
  }
};
