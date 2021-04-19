
import alarmRouter from './alarm.route.js';
import { imageRouter } from './image.route.js';
import { instanceRouter } from './instance.route.js';
import { sshRouter } from './ssh.route.js';

const routers = [imageRouter, instanceRouter, alarmRouter, sshRouter];
export default routers;
    