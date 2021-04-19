import GenesisCloudService from "../services/genesis_cloud.service.js"


/**
 * SSH Controller
 * @author Hekuran Islamaj
 */
export const SSHController = {

    /**
     * get ssh keys
     * @param {request} req 
     * @param {response} res 
     * @returns 
     */
    getSSHs: async(req, res) => {
        const sshkeys = await GenesisCloudService.getSSHs();
        return res.json(sshkeys);
    }
}