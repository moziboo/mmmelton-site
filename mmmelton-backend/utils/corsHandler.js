const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', 'https://mmmelton.com'];

module.exports = function corsHandler(requestOrigin) {
    const headers = {
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Api-Key',
        'Access-Control-Allow-Credentials': 'true',
        'Vary': 'Origin'
    };

    if (allowedOrigins.includes(requestOrigin)) {
        headers['Access-Control-Allow-Origin'] = requestOrigin;
    }

    return headers;
};