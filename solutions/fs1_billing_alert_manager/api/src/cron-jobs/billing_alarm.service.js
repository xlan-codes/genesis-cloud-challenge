import Agenda from 'agenda';
import env from '../../env.js';
import { logger } from '../logger/logger.js';
import AlarmService from '../services/alarm.service.js';
import GenesisCloudService from '../services/genesis_cloud.service.js';
import {thresholdReached} from '../services/mail.service.js'

/**
 * check alarms if threshold reached and make decision
 * @param {Array<Alarm>} alarms 
 */
const checkAlarmsAndApplyActions = async(alarms) => {
    if(Array.isArray(alarms)) {
        alarms.forEach(async(alarm) => {
            let hours = Math.abs((new Date()) - alarm.created_at) / 36e5;
            let reachedThreshold = hours * env.INSTANCE_PRICE_PER_HOUR;
            if(alarm.threshold <= reachedThreshold) {
                if(alarm.notification){
                    thresholdReached(`Threshold for instance x reached`);
                }
                
                if(alarm.destroy) {
                    GenesisCloudService.destoryInstance(alarm.instance).then((res) => {
                        logger.info(env.LOG_LEVEL, res);
                    }).catch((err) => {
                        logger.info(env.LOG_LEVEL, err);
                    });
                }
                alarm.status = false;
                alarm.save();
            } 
        });
    }
}

const agenda = new Agenda({
    db: {
      address: env.MONGODB_STRING,
      options: { useNewUrlParser: true, useUnifiedTopology: true },
      collection: `agendaJobs`
    }
  });

  agenda.define(
    'billing',
    async(job, done) => {
        AlarmService.getAlarms({status: true}).then((res) => {
            checkAlarmsAndApplyActions(res);
        });
      done();
    }
  );

const jobs = async () => {
    logger.log(env.LOG_LEVEL, 'Agenda started');
    agenda.processEvery('one hour');
    await agenda.start();
    await agenda.every('one hour', 'billing');
  
    agenda.on('start', (job) => {
        logger.log(env.LOG_LEVEL, `Job <${job.attrs.name}> starting`);
    });
    agenda.on('success', (job) => {
        logger.log(env.LOG_LEVEL, `Job <${job.attrs.name}> succeeded`);
    });
    agenda.on('fail', (error, job) => {
        logger.log(env.LOG_LEVEL, `Job <${job.attrs.name}> failed: ` + error);
    });
  };

  export default jobs;
