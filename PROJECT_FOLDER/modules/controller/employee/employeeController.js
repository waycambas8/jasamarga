const { async } = require("rxjs");

class EmployeeController {
    getAllUsers = async (req, res) => {
        await console.log("testing controller")
        res.json("hallo")
    };
}

module.exports = EmployeeController;
