const { body, validationResult } = require("express-validator");
const { Employee, Family } = require("../../../models");
const messages = require("../../../config/message");

const createFamily = [
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
    body('identifier').isString().isLength({max: 20}).custom(
        async (item) => {
            const isExists = await Family.findOne({
                where: {
                    identifier: item
                }
            })
            if (isExists) {
                throw new Error(messages.UNIQUE);
            }
            return true;
        }
    ),
    body('job').isString().isLength({max: 191}),
    body('place_of_birth').isString().isLength({max: 191}),
    body('date_of_birth').isDate(),
    body('religion').isIn(['Islam','Katolik','Budha','Protestas','Konghucu']),
    body('is_life').isBoolean(),
    body('is_divorced').isBoolean(),
    body('relation_status').isIn(['Suami','Istri','Anak','Anak Sambung']),
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

module.exports = createFamily