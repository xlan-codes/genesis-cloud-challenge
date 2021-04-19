import constants from "../constants"
import request from "../api/api"


const sshService  = {
   getSSHKeys: async() => {
       return request.get(constants.baseUrl + constants.sshkeys).then((res) => res);
   },
}

export default sshService;