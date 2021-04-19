import { server } from "../../test/server_test.js";
import { paths } from "../constants.js";
import request from 'supertest';


describe("Test the get instance path", () => {
    test("It should response the GET method", (done) => {
      
      request(server).get(paths.instance.basePath).expect(200, done);
     
    });
});

describe("Test the get instance type path", () => {
    test("It should response the GET method", (done) => {
      request(server).get(paths.instance.basePath).expect(200, done);
    });
});

describe("Test the post instance path", () => {
    test("It should response the POST method", async (done) => {
      request(server).post(paths.instance.basePath)
      .send({name: 'instance', hostname:"1", type:'false', image:'image'})
      .set('Accept', 'application/json').expect(400,done);
    });
});

describe("Test the delete delete path", () => {
    test("It should response the DELETE method", async () => {
      request(server).delete(paths.instance.basePath + '/x').then((res)=> {
        expect(res.status).toBe(500);
      });
      
    });
});

describe("Test the put instance path", () => {
    test("It should response the PUT method", (done) => {
        
      request(server).put(paths.instance.basePath + '/x')
        .send({name: 'instance', hostname:"1", type:'false', image:'image'})
        .set('Accept', 'application/json')
        .expect(200, done);
    });
});