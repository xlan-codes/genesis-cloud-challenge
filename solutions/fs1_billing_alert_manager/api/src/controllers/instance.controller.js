import GenesisCloudService from "../services/genesis_cloud.service.js"
import InstanceService from "../services/instance.service.js"

/**
 * Instance controller
 * @author Hekuran Islamaj
 */
const InstanceController = {

    /**
     * create new instance
     * @param {request} req 
     * @param {response} res 
     * @returns 
     */
    createInstance: async(req, res) => {
        try {
            const instance = req.body;
            const createdInstance =  await GenesisCloudService.createInstance(instance);
            return res.json(createdInstance);
        } catch(e) {
            return res.status(e.statusCode).json(e.body);
        }
        
    },
    /**
     * update exists instance
     * @param {request} req 
     * @param {response} res 
     * @returns 
     */
    updateInstance: async(req, res) => {
        const instance =  req.body;
        return res.json(true);
    },

    /**
     * delete exists instance
     * @param {request} req 
     * @param {response} res 
     * @returns
     */
    destoryInstance: async(req, res) => {
        try {
            const a = await GenesisCloudService.destoryInstance(req.params.id)
            return res.status(204).json(a);
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
        
    },

    /**
     * get instances
     * @param {request} req 
     * @param {response} res 
     * @returns
     */
    getInstances: async(req, res) => {
        const instances = await GenesisCloudService.getInstances();
        return res.json(instances);
    },

    /**
     * Get instance types
     * @param {request} req 
     * @param {response} res 
     * @returns
     */
    getInstanceType: async(req, res) => {
        const types = await InstanceService.getInstanceType();
        return res.json(types);
    }
}

export default InstanceController
