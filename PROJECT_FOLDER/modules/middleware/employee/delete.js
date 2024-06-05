const { body, validationResult, param } = require("express-validator");
const { Employee, Family } = require("../../../models");
const messages = require("../../../config/message");
const { async } = require("rxjs");

const deleteEmployee = [
    param('id').isInt().custom(
        async (item) => {
            const isExists = await Employee.findOne({
                where: {
                    id: item
                }
            })
            if (!isExists) {
                throw new Error(messages.NOT_EXISTS);
            }
            return true;
        }
    ),

    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => `${error.path} ${error.msg}`)[0];
            return res.status(406).json({
                message: errorMessages
            });
        }
        next();
    }
]

module.exports = deleteEmployee