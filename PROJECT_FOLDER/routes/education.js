var express = require('express');
const EducationBrowseController = require('../modules/controller/education/educationBrowseController');
const EducationController = require('../modules/controller/education/educationController');
var router = express.Router();
    
/* GET home page. */
router.get('/', new EducationBrowseController().all);
router.get('/:id', new EducationBrowseController().detail);

router.post('/', new EducationController().create);
router.put('/:id', new EducationController().create);

module.exports = router;
