var express = require('express');
const FamilyBrowseController = require('../modules/controller/family/familyBrowseController');
const createFamily = require('../modules/middleware/family/create');
const FamilyController = require('../modules/controller/family/familyController');
const deleteFamily = require('../modules/middleware/family/delete');
const updateFamily = require('../modules/middleware/family/update');
var router = express.Router();
    
/* GET home page. */
router.get('/', new FamilyBrowseController().all);
router.get('/:id', new FamilyBrowseController().detail);

router.post('/', createFamily, new FamilyController().create);
router.put('/:id', updateFamily, new FamilyController().update);
router.delete('/:id', deleteFamily, new FamilyController().delete);

module.exports = router;
