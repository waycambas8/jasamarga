const { async } = require("rxjs");
const { Employee } = require("../../../models");

class EmployeeController {
    async create (req, res) {
        console.log(req.body)
        const transaction = await Employee.sequelize.transaction()
        try {
            const data = await Employee.create(req.body, { transaction });
            await transaction.commit();

            return res.json({
                data
            })
        } catch (error) {
            await transaction.rollback();
            return res.status(500).json({
                message: 'Error',
                error: error.message,
            });
        }        
    }
}

module.exports = EmployeeController;
