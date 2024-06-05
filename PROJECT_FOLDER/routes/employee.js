var express = require('express');
const EmployeeController = require('../modules/controller/employee/employeeController');
const EmployeeBrowseController = require('../modules/controller/employee/employeeBrowseController');
const createEmployee = require('../modules/middleware/employee/create');
var router = express.Router();
    
/* GET home page. */
router.get('/', new EmployeeBrowseController().all);
router.get('/:id', new EmployeeBrowseController().detail);

router.post('/', createEmployee, new EmployeeController().create);
router.put('/:id', new EmployeeController().create);

module.exports = router;
