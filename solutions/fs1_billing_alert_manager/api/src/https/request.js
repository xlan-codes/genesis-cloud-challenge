import got from 'got';

/**
 * funcation that encapsulate http requests
 * @param {string} url 
 * @param {object} options 
 * @returns return http response
 */
export const httpRequest = async(url, options = {}) => {
    try {
        options['responseType'] = 'json';
       return await got(url, options).then((res) => res); 
    }catch(e) {
        throw e.response;
    }
    
};
const handlerResponse = async(response) => {

};

/**
 * request object for making https requests
 * @author Hekuran Islamaj
 */
export const request = {

    /**
     * function that use GET method for requests
     * @param {string} url that qe want to do the requests
     * @param {object} options all options about request like headers, body etc.
     * @returns http response
     */
    get: async(url, options = {}) => {
        options['method'] ='GET';
        return await httpRequest(url, options);
    },

     /**
     * function that use POST method for requests
     * @param {string} url that qe want to do the requests
     * @param {object} options all options about request like headers, body etc.
     * @returns http response
     */
    post: async(url, options = {}) => {
        options['method'] ='POST';
        return await httpRequest(url, options);
    },

     /**
     * function that use PUT method for requests
     * @param {string} url that qe want to do the requests
     * @param {object} options all options about request like headers, body etc.
     * @returns http response
     */
    put: async(url, options = {}) => {
        options['method'] ='PUT';
        return await httpRequest(url, options);
    },

     /**
     * function that use DELETE method for requests
     * @param {string} url that qe want to do the requests
     * @param {object} options all options about request like headers, body etc.
     * @returns http response
     */
    delete: async(url, options = {}) => {
        options['method'] ='DELETE';
        return await httpRequest(url, options);
    },

     /**
     * function that use PATCH method for requests
     * @param {string} url that qe want to do the requests
     * @param {object} options all options about request like headers, body etc.
     * @returns http response
     */
    patch: async(url, options = {}) => {
        options['method'] ='PATCH';
        return await httpRequest(url, options);
    }
}