import AlarmService from "./alarm.service";
import env from '../../env.js';
import mongoose from 'mongoose';

beforeAll(async () => {
  const url = env.MONGODB_STRING
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: false })
})

describe("Alarm Service", () => {
    test("getAlarm should to return array", async () => {
        jest.useFakeTimers();
        const res = await AlarmService.getAlarms({})
        expect(res).toBeTruthy();
      });
    test("setAlarm should to return object", async () => {
      jest.useFakeTimers();
        const res = await AlarmService.setAlarm({instance: "x", threshold: 1, destory: true, notification: true, status: true})
        expect(res).toBeTruthy();
      });
    test("updateAlarm should to return object", async () => {
      jest.useFakeTimers();
        const res = await AlarmService.cancelAlarm('x')
        expect(res).toBeTruthy();
      });
});