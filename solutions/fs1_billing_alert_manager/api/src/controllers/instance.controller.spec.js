import InstanceController from "./instance.controller";
import { TestUtils } from "../../test/test_utils.js";

describe("Instance Controller", () => {
    test("create instance should to return object", async () => {
      InstanceController.createInstance(TestUtils.mockRequest(), TestUtils.mockResponse()).then((res) => {
          expect(res).toBeTruthy();
        });
      });
    test("getInstances should to return object", async () => {
       InstanceController.getInstances(TestUtils.mockRequest(), TestUtils.mockResponse()).then((res) => {
          expect(res).toBeTruthy();
        });
      });
    test("getInstanceTypes should to return array", () => {
      InstanceController.getInstances(TestUtils.mockRequest(), TestUtils.mockResponse()).then((res) => {
          expect(res).toBeTruthy();
        });
      });
    test("destroyInstance should to return object", () => {
      InstanceController.destoryInstance(TestUtils.mockRequest(), TestUtils.mockResponse()).then((res) => {
          expect(res).toBeTruthy();
        });
      });
    test("updateInstance should to return true", () => {
      jest.useFakeTimers();
        InstanceController.updateInstance(TestUtils.mockRequest(), TestUtils.mockResponse()).then((res) => {
          expect(res).toBeTruthy();
        });
        
      });
});