const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.NOT_FOUNT:
            res.json({ title: "Not found", message: err.message, stackTrace: err.stack });
            break;
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation failed", message: err.message, stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Un-authorized", message: err.message, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "Internal Server Error", message: err.message, stackTrace: err.stack });
            break;
        default:
            res.json({ statusCode, title: "All good" });
            break;
    }
};

module.exports = errorHandler;