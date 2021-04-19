

export const TestUtils = {
    mockRequest: () => {
        const req = {
            body:''
        };
        return req;
    },
    mockResponse: () => {
        const res = {
            json: (...params) => {
                return params;
            },
            status: (s) => {
                return res;
            }
        }
        return res;
    }

}