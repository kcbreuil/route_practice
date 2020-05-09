function log(req, res, next) {
    console.log("Im in the middleware");
    return next();
}

module.exports = {
    log
}