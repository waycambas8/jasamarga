const { body, validationResult } = require("express-validator");
const { Employee } = require("../../../models");
const messages = require("../../../config/message");

const createEmployee = [
    body('nik').isString().isLength({max: 50}).custom(
        async (item) => {
            const isExists = await Employee.findOne({
                where: {
                    nik: item
                }
            })
            if (isExists) {
                throw new Error(messages.UNIQUE);
            }
            return true;
        }
    ),
    body('name').isString().isLength({max: 191}),
    body('is_active').isBoolean(),
    body('start_date').isDate(),
    body('end_date').isDate(),
    body('created_by').isString().isLength({max: 191}),
    body('updated_by').isString().isLength({max: 191}),

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

module.exports = createEmployee