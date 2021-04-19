
import { request } from "./request";

describe("test requests", () => {
    test("get request should to return Response or Error", () => {
      request.get('https://google.com/', {}).then((res) => {
          expect(res.statusCode).toBe(200);
        })
        
      });
});