const { async } = require("rxjs");
const { Profile } = require("../../../models");

class ProfileController {
    async create (req, res) {
        console.log(req.body)
        const transaction = await Profile.sequelize.transaction()
        try {
            const data = await Profile.create(req.body, { transaction });
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

module.exports = ProfileController;
