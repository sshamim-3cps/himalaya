function apiRequestTransform(req, res, next) {
    req.event = {
        "resource": req.path,
        "path": req.path,
        "httpMethod": req.method,
        "headers": req.headers,
        "queryStringParameters": req.query,
        "pathParameters": req.params,
        "body": req.body && Object.keys(req.body).length > 0 ? req.body : null,
        "isBase64Encoded": false
    }
    console.log("API Gateway transformed Request Event: ", req.event);
    next();
}

module.exports = apiRequestTransform;