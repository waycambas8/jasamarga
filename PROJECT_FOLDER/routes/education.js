var express = require('express');
const EducationBrowseController = require('../modules/controller/education/educationBrowseController');
const EducationController = require('../modules/controller/education/educationController');
const deleteEducation = require('../modules/middleware/education/delete');
const createEducation = require('../modules/middleware/education/create');
const updateEducation = require('../modules/middleware/education/update');
var router = express.Router();
    
/* GET home page. */
router.get('/', new EducationBrowseController().all);
router.get('/:id', new EducationBrowseController().detail);

router.post('/', createEducation, new EducationController().create);
router.put('/:id', updateEducation, new EducationController().update);
router.delete('/:id', deleteEducation, new EducationController().delete);

module.exports = router;
