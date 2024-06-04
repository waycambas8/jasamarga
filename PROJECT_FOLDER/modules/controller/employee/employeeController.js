const { async } = require("rxjs");

class EmployeeController {
    getAllUsers = async (req, res) => {
        res.json("hallo")
    };
}

module.exports = EmployeeController;
