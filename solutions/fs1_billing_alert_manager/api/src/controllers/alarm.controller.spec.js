import { AlarmController } from "./alarm.controller";
import { TestUtils } from "../../test/test_utils.js";
import env from "../../env.js";
import mongoose from 'mongoose';

beforeAll(async () => {
  const url = env.MONGODB_STRING
  await mongoose.connect(url, { useNewUrlParser: true })
});

describe("Alarm Controller", () => {
    test("getAlarm should to return array", async () => {
      jest.useFakeTimers();
        const res = await AlarmController.getAlarms(null, TestUtils.mockResponse())
        expect(res).toBeTruthy();
      });
    test("setAlarm should to return array", async () => {
      jest.useFakeTimers();
        const res = await AlarmController.getAlarms(null, TestUtils.mockResponse())
        expect(res).toBeTruthy();
      });
    test("deleteAlarm should to return array", async () => {
      jest.useFakeTimers();
        const res = await AlarmController.getAlarms(null, TestUtils.mockResponse())
        expect(res).toBeTruthy();
      });
    test("updateAlarm should to return array", async () => {
      jest.useFakeTimers();
        const res = await AlarmController.getAlarms(null, TestUtils.mockResponse())
        expect(res).toBeTruthy();
      });
});