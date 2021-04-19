
import { server } from "../../test/server_test.js";
import { paths } from "../constants.js";
import request from 'supertest';

describe("Test the get ssh path", () => {
    test("It should response the GET method", (done) => {
      request(server).get(paths.ssh.basePath).expect(200, done);
    });
});