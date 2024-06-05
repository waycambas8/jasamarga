var express = require('express');
const EmployeeController = require('../modules/controller/employee/employeeController');
const EmployeeBrowseController = require('../modules/controller/employee/employeeBrowseController');
const createEmployee = require('../modules/middleware/employee/create');
const updateEmployee = require('../modules/middleware/employee/update');
const deleteEmployee = require('../modules/middleware/employee/delete');
var router = express.Router();
    
/* GET home page. */
router.get('/', new EmployeeBrowseController().all);
router.get('/:id', new EmployeeBrowseController().detail);

router.post('/', createEmployee, new EmployeeController().create);
router.put('/:id', updateEmployee, new EmployeeController().update);
router.delete('/:id', deleteEmployee, new EmployeeController().delete);

module.exports = router;
