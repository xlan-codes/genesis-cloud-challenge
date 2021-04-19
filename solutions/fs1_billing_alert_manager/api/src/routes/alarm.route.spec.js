import { server } from "../../test/server_test.js";
import { paths } from "../constants.js";
import request from 'supertest';


describe("Test the get alarm path", () => {
    test("It should response the GET method", () => {
      request(server).get(paths.alarm.basePath).then((res) => {
        expect(res.status).toBe(200);
      });
      
    });
});

describe("Test the post alarm path", () => {
    test("It should response the POST method", (done) => {
      request(server).post(paths.alarm.basePath)
      .send({instace: 'instance', threshold:1, destroy:false})
      .set('Accept', 'application/json')
      .expect(400, done);
    });
});

describe("Test the delete alarm path", () => {
    test("It should response the DELETE method", async () => {
      jest.useFakeTimers();
      const response = await request(server).delete(paths.alarm.basePath + '/x');
      expect(response.status).toBe(200);
    });
});

describe("Test the put alarm path", () => {
    test("It should response the PUT method", (done) => {
        request(server).put(paths.alarm.basePath + '/x')
        .send({instace: 'instance', threshold:1, destroy:false})
        .set('Accept', 'application/json').expect(200, done)

        
    });
});