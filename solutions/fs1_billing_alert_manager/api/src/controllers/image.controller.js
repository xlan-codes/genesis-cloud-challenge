import GenesisCloudService from "../services/genesis_cloud.service.js"

/**
 * Image controller
 */

export const ImageController = {

    /**
     * Get images from genesis cloud
     * @param {request} req 
     * @param {response} res 
     * @returns 
     */
    getImages: async(req, res) => {
        const images = await GenesisCloudService.getImages();
        return res.json(images);
    }
}