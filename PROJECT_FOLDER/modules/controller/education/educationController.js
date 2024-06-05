const { async } = require("rxjs");
const { Education } = require("../../../models");

class EducationController {
    async create (req, res) {
        console.log(req.body)
        const transaction = await Education.sequelize.transaction()
        try {
            const data = await Education.create(req.body, { transaction });
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

module.exports = EducationController;
