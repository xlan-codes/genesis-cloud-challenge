

let requestOption = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: null
  };

const responseHandler = async(response) => {
    if(response.status === 200 || response.status === 201 || response.status === 204){
        return response.json();
    } else {
        const a = await response.json()
        throw new Error(a.message);
    }
} 

const request =  {
    get: async (url, options={}) => {
        requestOption = {...requestOption, ...options};
        requestOption['method'] = 'GET';
        return fetch(url, requestOption)
        .then(async(res) => await responseHandler(res))
        .then(
            (result) => {
                return result;
            }).catch((error) => {
                throw error.message;
            }
        );
    },
    post: async(url, options={}) => {
        requestOption = {...requestOption, ...options};
        requestOption['method'] = 'POST';
        return fetch(url, requestOption)
            .then(async(res) => await responseHandler(res))
            .then(
                (result) => {
                    return result;
                }).catch((error) => {
                    throw error;
                    
                }
            );

    },
    delete: async(url, options={}) => {
        requestOption = {...requestOption, ...options};
        requestOption['method'] = 'DELETE';
        return fetch(url, requestOption)
            .then(async(res) => await responseHandler(res))
            .then(
                (result) => {
                    return result;
                }).catch((error) => {
                    throw error.message;;
                }
            );
    },
    patch: async(url, options={}) => {
        requestOption = {...requestOption, ...options};
        requestOption['method'] = 'PATCH';
        return fetch(url, requestOption)
            .then(async(res) => await responseHandler(res))
            .then(
                (result) => {
                return result;
                },
                (error) => {
                    throw error.message;;
                }
            );
    },
    put: async(url, options={}) => {
        requestOption = {...requestOption, ...options};
        requestOption['method'] = 'PUT';
        return fetch(url, requestOption)
            .then(async(res) => await responseHandler(res))
            .then(
                (result) => {
                    return result;
                }).catch((error) => {
                    throw error.message;;
                }
            );
    }
}

export default request;
