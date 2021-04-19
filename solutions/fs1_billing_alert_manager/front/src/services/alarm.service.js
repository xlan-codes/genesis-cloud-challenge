import constants from "../constants"
import request from "../api/api"


const alarmService  = {
   getAlarm: async() => {
       return request.get(constants.baseUrl + constants.alarm).then((res) => res);
   },
   setAlarm: async(data) => {
       const options = {body: JSON.stringify(data)};
       return request.post(constants.baseUrl + constants.alarm, options).then((res) => res);
   }
}

export default alarmService;