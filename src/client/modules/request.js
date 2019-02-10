// @flow
/* eslint no-underscore-dangle: 0 */
import type { RequestOptions, RequestBody, Response } from "@types";
import type { AxiosXHRConfig } from "axios";
import axios from "axios";

async function request(options: RequestOptions): Promise<Response> {
  const config: AxiosXHRConfig<RequestBody> = {
    timeout: 5000,
    ...options
  };
  try {
    return await axios(config);
  } catch (error) {
    return error.response;
  }
}

export default request;
