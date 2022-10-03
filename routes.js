const getUser = require('./lambdas/GetUser/index.js'); 
const postTicket = require('./lambdas/PostTicket/index.js'); 
const apiGatewayTransform = require('./middleware/aws-api-request-transform');
const express = require('express')
const router = express.Router();

// Inline middleware to log requests
router.use(express.json());
router.use((req, res, next) => {
    console.log("Request recieved on router TIME: ", toString(new Date()));
    console.log("Request:", req);
    next();
});

router.use(apiGatewayTransform);

router.all('/*', async (req, res) => {
    let event = req.event;
    event.body = typeof event.body === 'object' ? event.body : JSON.parse(event.body);
    console.log('Event', event);
    let response;
    switch (`${event.httpMethod} ${event.resource}`) {
    case 'POST /ticket':
        response = await postTicket.handler(event);
        break;
    case 'GET /user':
        response = await getUser.handler(event);
        break;
        default:
            response = {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid request path, method [' + `${event.httpMethod} ${event.resource}]` })
            };
            break;
    }
    console.log("Returning response: ", JSON.stringify(response));
    res.setHeader('content-type', 'application/json');
    res.status(response.statusCode);
    return res.send(response.body);
});


module.exports = router;
