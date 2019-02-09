import request from "@modules/request";
import axios from "axios";

jest.mock("axios");

describe("modules/request.jsのテスト", () => {
  it("axiosを呼ぶ", async () => {
    const axiosMock = jest.fn();

    axios.mockImplementation(args => {
      axiosMock(args);
      return new Promise(resolve => resolve("test"));
    });

    expect(await request()).toBe("test");
    expect(axiosMock.mock.calls[0][0]).toEqual({
      headers: { "Access-Control-Allow-Origin": "*" },
      timeout: 5000
    });
    axiosMock.mockClear();

    expect(await request({ body: "body" })).toBe("test");
    expect(axiosMock.mock.calls[0][0]).toEqual({
      headers: { "Access-Control-Allow-Origin": "*" },
      timeout: 5000,
      body: "body"
    });
  });

  it("通信に失敗した時、例外が発生する", async () => {
    axios.mockImplementation(
      () =>
        new Promise((_, reject) =>
          reject({
            response: {
              message: "error"
            }
          })
        )
    );
    try {
      await request();
    } catch (e) {
      expect(e.message).toBe("error");
    }
  });
});
