const ErrorCode = {
    //2xx: Success
    OK: 200,
    Created: 201,
    Acepted: 202,
    NoContent: 204,
    //4xx client error
    BadRequest : 400,
    NotFound: 404,
    //5xx Server Error
    InternalServerError: 500,
}

module.exports = ErrorCode;