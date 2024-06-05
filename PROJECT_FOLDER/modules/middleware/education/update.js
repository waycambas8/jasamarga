const { body, validationResult, param } = require("express-validator");
const { Employee, Education } = require("../../../models");
const messages = require("../../../config/message");

const updateEducation = [
    param('id').isInt().custom(
        async (item) => {
            const isExists = await Education.findOne({
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
    body('employee_id').optional().isInt().custom(
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
    body('name').optional().isString().isLength({max: 191}),
    body('level').optional().isIn(['TK','SD','SMP','SMA','Strata 1','Strata 2','Doktor','Profesor']),
    body('description').optional().isString().isLength({max: 255}),
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

module.exports = updateEducation