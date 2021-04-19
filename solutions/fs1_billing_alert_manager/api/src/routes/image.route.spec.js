import { server } from "../../test/server_test.js";
import { paths } from "../constants.js";
import request from 'supertest';


describe("Test the get image path", () => {
    test("It should response the GET method", (done) => {
      request(server).get(paths.alarm.basePath).expect(200, done);
    });
});