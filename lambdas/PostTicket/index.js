exports.handler = async function postTicket(event) {
    try {
        // customize your code accordingly
        console.log("Recieved Event (path: [PostTicket])", event);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "OK DATA"
            })
        };
    }
    catch (err) {
        console.error("Error occured in postTicket: ", err)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'INTERNAL_SERVER_ERROR' })
        }
    }
}