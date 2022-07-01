const jwt = require('jsonwebtoken')
const JWT_SECRET = "Something_secret";

const fetchUser = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send("Regenerate token1");
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send("Regenerate token2");
    }

}
module.exports = fetchUser;