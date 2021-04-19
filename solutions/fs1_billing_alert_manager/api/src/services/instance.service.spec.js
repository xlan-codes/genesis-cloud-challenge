import InstanceService from "./instance.service";


describe("Instance Service", () => {
    test("get instance types should to return array", async () => {
      jest.useFakeTimers();
        const res = InstanceService.getInstanceType()
        expect(res).toBeTruthy();
      });
});