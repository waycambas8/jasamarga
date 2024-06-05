const { body, validationResult, param } = require("express-validator");
const { Employee } = require("../../../models");
const messages = require("../../../config/message");

const updateEmployee = [
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
    body('nik').isString().optional().isLength({max: 50}).custom(
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
    body('name').isString().optional().isLength({max: 191}),
    body('is_active').optional().isBoolean(),
    body('start_date').optional().isDate(),
    body('end_date').optional().isDate(),
    body('created_by').optional().isString().isLength({max: 191}),
    body('updated_by').optional().isString().isLength({max: 191}),

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

module.exports = updateEmployee