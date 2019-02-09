// @flow
import type { CreateApiUrlOptions } from "@types";

// APIのURLを生成
function createApiUrl(path: string, options?: CreateApiUrlOptions): string {
  const origin: string =
    process.env.API_SERVER_ORIGIN || "http://localhost:8000";

  if (options) {
    const { substr, newstr } = options;
    return `${origin}${path.replace(substr, newstr)}`;
  }
  return `${origin}${path}`;
}
export default createApiUrl;
