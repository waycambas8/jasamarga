var express = require('express');
const EmployeeController = require('../modules/controller/employee/employeeController');
var router = express.Router();
    
/* GET home page. */
router.get('/', new EmployeeController().getAllUsers);

module.exports = router;
