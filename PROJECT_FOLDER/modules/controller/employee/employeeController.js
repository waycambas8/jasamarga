const { async } = require("rxjs");
const { Employee, Family, Education, Profile } = require("../../../models");
const deleteEducation = require("../../middleware/education/delete");
const EducationController = require("../education/educationController");
const FamilyController = require("../family/familyController");
const ProfileController = require("../profile/profileController");

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

    async delete (req, res) {
        const transactionEmployee = await Employee.sequelize.transaction()

        try {
            const data = await Employee.destroy({ 
                where: { id: req.params.id },
                transactionEmployee 
            });
            await transactionEmployee.commit();

            await Education.destroy({ 
                where: { employee_id: req.params.id }
            });

            await Family.destroy({ 
                where: { employee_id: req.params.id }
            });

            await Profile.destroy({ 
                where: { employee_id: req.params.id } 
            });

            return res.json({
                data
            })
        } catch (error) {
            await transactionEmployee.rollback();

            return res.status(500).json({
                message: 'Error',
                error: error.message,
            });
        }        
    }

    async update (req, res) {
        console.log(req.body)
        const transaction = await Employee.sequelize.transaction()
        try {
            await Employee.update(req.body, { 
                where: {
                    id: req.params.id
                },
                transaction 
            });
            await transaction.commit();


            const data = await Employee.findOne({
                where: {
                    id: req.params.id
                }
            });

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
