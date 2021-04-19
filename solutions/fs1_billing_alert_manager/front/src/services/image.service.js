import constants from "../constants"
import request from "../api/api"


const imageService  = {
   getImages: async() => {
       return request.get(constants.baseUrl + constants.image).then((res) => res);
   },
}

export default imageService;