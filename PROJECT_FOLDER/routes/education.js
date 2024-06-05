var express = require('express');
const EducationBrowseController = require('../modules/controller/education/educationBrowseController');
var router = express.Router();
    
/* GET home page. */
router.get('/', new EducationBrowseController().all);
router.get('/:id', new EducationBrowseController().detail);

module.exports = router;
