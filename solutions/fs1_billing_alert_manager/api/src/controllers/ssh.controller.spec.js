import { TestUtils } from "../../test/test_utils.js";
import { SSHController } from "./ssh.controller.js";


describe("SSHController Controller", () => {
        test("getSSHs should to return array", async () => {
          jest.useFakeTimers();
            const res = await SSHController.getSSHs(null, TestUtils.mockResponse())
            expect(res).toBeTruthy();
          });
});