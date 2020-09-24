module.exports = function (err, res, res) {
    res.status(500).send(` server error: ${err.message}`);
};