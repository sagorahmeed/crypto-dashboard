import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge-utils";
import Axios from "axios";
import useAxios, { configure } from "axios-hooks";
import { useEffect } from "react";
import config from "../config/index";



export function useFetch(axiosOptions, otherParams = {}) {
  const app = useAppBridge()
  const axios = Axios.create({
    baseURL: config.apiUrl,
  });
  
  axios.interceptors.request.use(async (setup) => {
    try {
      const token = await getSessionToken(app);
      console.log("Api is calling");
      return {
        ...setup,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } catch (err) {
      console.log(err, 'error from inceptor');
      return setup;
    }
  });
  
  configure({ axios });
  const [{ data, loading, error }, fetch] = useAxios(axiosOptions, otherParams);
  useEffect(() => {
    if (data) {
      console.groupCollapsed(
        "%c Response Just Kissed",
        "color:#0af;font-family:monospace;font-size:15px"
      );
      console.log(data);
      console.groupEnd(
        "%c Response Just Kissed",
        "color:#0af;font-family:monospace;font-size:15px"
      );
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      console.groupCollapsed(
        "%c Error Just Kissed",
        "color:#f14;font-family:monospace;font-size:15px"
      );
      console.groupCollapsed("error");
      console.dir(error);
      console.groupEnd("error");
      console.groupCollapsed("request data");
      console.table(axiosOptions);
      console.groupEnd("request data");
      console.groupEnd(
        "%c Error Just Kissed",
        "color:#f14;font-family:monospace;font-size:15px"
      );
    }
  }, [error]);
  return { data, loading, error, fetch };
}
