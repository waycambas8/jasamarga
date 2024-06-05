const { async } = require("rxjs");

class EmployeeController {
    all = async (req, res) => {
        res.json("hallo")
    };
}

module.exports = EmployeeController;
