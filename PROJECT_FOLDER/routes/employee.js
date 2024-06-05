var express = require('express');
const EmployeeController = require('../modules/controller/employee/employeeController');
const EmployeeBrowseController = require('../modules/controller/employee/employeeBrowseController');
var router = express.Router();
    
/* GET home page. */
router.get('/', new EmployeeBrowseController().all);
router.get('/:id', new EmployeeBrowseController().detail);

router.post('/', new EmployeeController().all);
router.put('/:id', new EmployeeController().all);

module.exports = router;
