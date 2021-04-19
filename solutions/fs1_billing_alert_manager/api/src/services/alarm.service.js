import Alarm from '../models/alarm.model.js';


const AlarmService = {

    /**
     * create alarm
     * @param {object} alarm 
     */
    setAlarm: async (alarm) => {
        return await Alarm.create({ instance: alarm.instance, threshold: alarm.threshold, status: alarm.status }).then((doc) => {
            return doc;
        }).catch((err) => {
            throw err;
        });
    },

    /**
     * cancel alarm
     * @param {string} id alarm id
     * @returns 
     */
    cancelAlarm: async(id) => {
       return await Alarm.updateOne({ id: id }, { status: false }).then((doc)=>doc);
    },

    /**
     * get alarms by filter
     * @param {object} filter 
     * @returns 
     */
    getAlarms: async(filter={}) => {
        return await Alarm.find().then((docs) => docs);
    }
}

export default AlarmService;