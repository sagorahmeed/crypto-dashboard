/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import {
  Provider as AppBridgeProvider,
  useAppBridge
} from "@shopify/app-bridge-react";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import { Redirect } from "@shopify/app-bridge/actions";
import { useRouter } from "next/router";
import PaginationProvider from "PaginationContext/PaginationContext";
import { useEffect } from "react";
import { Provider } from 'react-redux';
import config from "../config";
import DashboardLayout from "../layouts/Dashboard";
import store from "../redux/store";
import "../styles/globals.css";

function MyApp({
  Component, pageProps, host
}) {
  const router = useRouter();

  const dynamicConfig = {
    apiKey: config.shopifyApiKey,
    host: host,
    forceRedirect: config.environment !== 'development',
  };

  const staticConfig = {
    apiKey: '423faebffb3e74c10a74122f9b7c8892',
    host: 'am91c2UtdGVzdC5teXNob3BpZnkuY29tL2FkbWlu',
    forceRedirect: false,
  };

  useEffect(() => {
    localStorage.setItem("host", JSON.stringify(host));
  }, [host]);

  return (
    <AppBridgeProvider
      config={staticConfig}
    >
      <MyProvider>
      <PaginationProvider>
        <Provider store={store}>
          {(!router.pathname.includes("/onboard") && (
            <DashboardLayout  >
              <Component {...pageProps} />
            </DashboardLayout>
          )) || <Component {...pageProps} />}
        </Provider>
        </PaginationProvider>
      </MyProvider>

    </AppBridgeProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ ctx }) => ({
  host: ctx.query.host ? ctx.query.host : (typeof window !== 'undefined') && JSON.parse(localStorage.getItem("host")),
  shopOrigin: ctx.query.shop,
});

function MyProvider({ children }) {
  const app = useAppBridge();
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      credentials: "include",
      fetch: userLoggedInFetch(app),
    }),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export function userLoggedInFetch(app) {
  const fetchFunction = authenticatedFetch(app);

  return async (uri, options) => {
    const response = await fetchFunction(uri, options);

    if (
      response.headers.get("X-Shopify-API-Request-Failure-Reauthorize") === "1"
    ) {
      const authUrlHeader = response.headers.get(
        "X-Shopify-API-Request-Failure-Reauthorize-Url"
      );

      const redirect = Redirect.create(app);
      redirect.dispatch(Redirect.Action.APP, authUrlHeader || `/auth`);
      return null;
    }

    return response;
  };
}