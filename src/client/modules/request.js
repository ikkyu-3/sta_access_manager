// @flow
/* eslint no-underscore-dangle: 0 */
import type { RequestOptions, RequestBody, Response } from "@types";
import type { AxiosXHRConfig } from "axios";

import axios from "axios";

// try catchは呼び出し側が行う
async function request(options: RequestOptions): Promise<Response> {
  const config: AxiosXHRConfig<RequestBody> = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    timeout: 5000,
    ...options
  };
  try {
    return await axios(config);
  } catch (error) {
    throw error.response;
  }
}

export default request;
