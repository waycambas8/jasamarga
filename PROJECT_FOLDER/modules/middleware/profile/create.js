const { body, validationResult } = require("express-validator");
const { Employee, Family, Profile } = require("../../../models");
const messages = require("../../../config/message");

const createProfile = [
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
    body('place_of_birth').isString().isLength({max: 191}),
    body('date_of_birth').isDate(),
    body('is_married').isBoolean(),
    body('prof_pict').isString().optional().isLength({max: 191}),
    body('gender').isIn(['Laki-Laki','Perempuan']),
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

module.exports = createProfile