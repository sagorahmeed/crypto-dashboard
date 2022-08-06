const DEVELOPMENT = {
  environment: process.env.environment,
  baseUrl: process.env.baseUrl,
  apiUrl: process.env.apiUrl,
  shopifyApiKey: process.env.shopifyApiKey,
  shopifyApiSecret: process.env.shopifyApiSecret,
  shopUrl: process.env.shopUrl,
  scopes: process.env.scopes,
  host: process.env.host,
  stateLogger: process.env.stateLogger,
};

const config = DEVELOPMENT;

export default config;
