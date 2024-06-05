const { body, validationResult } = require("express-validator");
const { Employee } = require("../../../models");
const messages = require("../../../config/message");

const createEducation = [
    body('employee_id').isInt().custom(
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
    body('name').isString().isLength({max: 191}),
    body('level').isIn(['TK','SD','SMP','SMA','Strata 1','Strata 2','Doktor','Profesor']),
    body('description').isString().isLength({max: 255}),
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