const usersService = require("../services/users.service")

exports.register = (req, res, next) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password
    };
    usersService.register(data, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).send({ success: 0, data: "Bad request" });
        }
        return res.status(200).send({
            success: 1,
            data: result
        });
    });
};