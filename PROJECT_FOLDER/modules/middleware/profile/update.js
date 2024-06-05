const { body, validationResult, param } = require("express-validator");
const { Employee, Profile } = require("../../../models");
const messages = require("../../../config/message");

const updateProfile = [
    param('id').isInt().custom(
        async (item) => {
            const isExists = await Profile.findOne({
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
    ).custom(
        async (item) => {
            const isExists = await Profile.findOne({
                where: {
                    employee_id: item
                }
            })
            if (isExists) {
                throw new Error(messages.UNIQUE);
            }
            return true;
        }
    ),
    body('place_of_birth').optional().isString().isLength({max: 191}),
    body('date_of_birth').optional().isDate(),
    body('is_married').optional().isBoolean(),
    body('prof_pict').isString().optional().isLength({max: 191}),
    body('gender').optional().isIn(['Laki-Laki','Perempuan']),
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

module.exports = updateProfile