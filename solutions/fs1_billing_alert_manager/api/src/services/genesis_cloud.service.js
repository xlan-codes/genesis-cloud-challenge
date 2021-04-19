import env from "../../env.js";
import { paths } from "../constants.js";
import { request } from "../https/request.js";

const baseUrl = env.GC_API + env.GC_SERVICE + env.GC_API_VERSION;
const getHeader =  async() => {
    const header = {"Content-Type": "application/json", "X-Auth-Token": env.GC_API_TOKEN};
    return header;
};
const GenesisCloudService = {
    
    
    getImages: async() => {
        const response = await request.get(baseUrl + paths.genesisCloudImage.basePath, {headers:await getHeader()})
        return response.body;
    },

    getSecurityGroups: async() => {
        const response = await request.get(baseUrl + paths.securityGroups.basePath, {headers: await getHeader()})
        return response.body;
    },

    getInstances: async() => {
        const response = await request.get(baseUrl + paths.genesisCloudInstance.basePath, {headers: await getHeader()})
        return response.body;
    },

    createInstance: async(instance) => {
        if(!instance) {
            throw Error("post instance ");
        }
        const securityGroups = await GenesisCloudService.getSecurityGroups();
        const jsonBody = {
            name: instance["name"],
            hostname: instance["hostname"],
            type: instance["type"],
            image: instance["image_id"],
            ssh_keys: [instance["ssh_key_ids"]],
            security_groups: securityGroups.security_groups,
            metadata: { startup_script: ""},
        }; 
        const response = await request.post(baseUrl + paths.genesisCloudInstance.basePath, {json: jsonBody,headers:await getHeader()})
        return response;
    },

    updateInstance: async(id, instance) => {
        const response = await request.patch(baseUrl + paths.genesisCloudInstance.basePath, {headers:await getHeader()})
        return response.body;
    },

    destoryInstance: async(id) => {
        const response = await request.delete(baseUrl + paths.genesisCloudInstance.basePath + '/' + id, {headers:await getHeader()})
        return response.body;
    },

    getSSHs: async() => {
        const response = await request.get(baseUrl + paths.genesisCloudSSHKeys.basePath, {headers:await getHeader()})
        return response.body;
    }
    
}

export default GenesisCloudService;