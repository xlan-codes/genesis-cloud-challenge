import AlarmService from "../services/alarm.service.js"

/**
 * Alarm controller
 * @author Hekuran Islamaj
 */
export const AlarmController = {

    /**
     * get all alarms
     * @param {request} req 
     * @param {response} res 
     * @returns 
     */
    getAlarms: async(req, res) => {
        const alarms =  await AlarmService.getAlarms();
        return res.json(alarms);
    },

    /**
     * create new alarm
     * @param {request} req 
     * @param {response} res 
     * @returns 
     */
    setAlarm: async(req, res) => {
        try {
            const alarm = req.body;
            const savedAlarm = await AlarmService.setAlarm(alarm);
            return res.json(savedAlarm);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
        
    },
    
    /**
     * delete alarm
     * @param {request} req 
     * @param {response} res 
     * @returns 
     */
    deleteAlarm: async(req, res) => {
        res.json(true)
    },

    /**
     * update exists alarm
     * @param {request} req 
     * @param {response} res 
     * @returns 
     */
    updateAlarm: async(req, res) => {
        return res.json(true);
    }
}