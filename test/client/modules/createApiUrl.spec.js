// @flow
import createApiUrl from "@modules/createApiUrl";

beforeAll(() => {
  delete process.env.API_SERVER_ORIGIN;
});

describe("modules/createApiUrl.jsのテスト", () => {
  it("APIのURLが作成する", () => {
    const url = createApiUrl("/test");
    expect(url).toBe("http://localhost:8000/test");
  });

  it("オプションを指定した時、パスが変換されたURLを作成する", () => {
    const options = {
      substr: ":id",
      newstr: "123456789"
    };
    const url = createApiUrl("/user/:id", options);
    expect(url).toBe("http://localhost:8000/user/123456789");
  });

  it("環境変数: API_SERVER_ORIGINが設定されている時、設定値がオリジンに反映されたURLを作成する", () => {
    process.env.API_SERVER_ORIGIN = "http://origin.test:3000";
    const url = createApiUrl("/test");
    expect(url).toBe("http://origin.test:3000/test");
  });
});
