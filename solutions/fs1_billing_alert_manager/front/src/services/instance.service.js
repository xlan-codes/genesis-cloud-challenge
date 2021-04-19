import constants from "../constants"
import request from "../api/api"

const instanceService = {
    getInstances: async() => {
        return request.get(constants.baseUrl + constants.instance).then((res) => res);
    },
    createInstance: async(data) => {
        const options = {body: JSON.stringify(data)}
        return request.post(constants.baseUrl + constants.instance, options).then((res) =>res);
    },
    getInstanceType:  async() => {
        return request.get(constants.baseUrl + constants.instanceType).then((res) => res);
    }
}

export default instanceService;
