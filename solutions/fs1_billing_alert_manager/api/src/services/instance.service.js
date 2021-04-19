import InstanceType from "../models/instance_type.model.js";

const InstanceService = {
    getInstances: async() => {

    },

    /**
     * Get all saved type of instance that getted from genesis cloud documentation and save to database
     * @returns saved type of instance
     */
    getInstanceType: async() => {
        return await InstanceType.find({});
    }
}

export default InstanceService;