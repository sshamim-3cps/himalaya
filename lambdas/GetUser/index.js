exports.handler = async function getUser(event) {
    try {
        // customize your code accordingly
        console.log("Recieved Event (path: [GetUser])", event);
        return {
            statusCode: 200,
            body: JSON.stringify({
                username: "sshamim",
                organization:"3clogic"
            })
        };
    }
    catch (err) {
        console.error("Error occured in getUser: ", err)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'INTERNAL_SERVER_ERROR' })
        }
    }
}