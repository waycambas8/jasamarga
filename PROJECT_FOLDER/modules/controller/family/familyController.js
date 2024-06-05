const { async } = require("rxjs");
const { Family } = require("../../../models");

class FamilyController {
    async create (req, res) {
        console.log(req.body)
        const transaction = await Family.sequelize.transaction()
        try {
            const data = await Family.create(req.body, { transaction });
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

module.exports = FamilyController;
