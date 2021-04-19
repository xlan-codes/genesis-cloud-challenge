import {paths} from '../constants.js';
import express from 'express';
import { AlarmController } from '../controllers/alarm.controller.js';

const alarmRouter = new express.Router();

/**
 * get route that return all alarms
 * @param id of the alarm
 */
alarmRouter.get(paths.alarm.basePath, AlarmController.getAlarms);

/**
 * get route of alarm
 * @param id of the alarm
 */
alarmRouter.get(paths.alarm.basePath + '/:id',AlarmController.getAlarms);

/**
 * post route of alarm
 */
alarmRouter.post(paths.alarm.basePath, AlarmController.setAlarm);

/**
 * @param id of the alarm
 */
alarmRouter.delete(paths.alarm.basePath + '/:id', AlarmController.deleteAlarm);

alarmRouter.patch(paths.alarm.basePath,(req, res) => {

});

/**
 * delete route of alarm
 * @param id of the alarm
 */
alarmRouter.put(paths.alarm.basePath + '/:id',AlarmController.updateAlarm);

export default alarmRouter;