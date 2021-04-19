
import { main } from './server.js';
import jobs from './src/cron-jobs/billing_alarm.service.js';

main(); // start server
jobs(); //cron jobs