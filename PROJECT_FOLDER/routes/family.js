var express = require('express');
const FamilyBrowseController = require('../modules/controller/family/familyBrowseController');
const createFamily = require('../modules/middleware/family/create');
const FamilyController = require('../modules/controller/family/familyController');
var router = express.Router();
    
/* GET home page. */
router.get('/', new FamilyBrowseController().all);
router.get('/:id', new FamilyBrowseController().detail);

router.post('/', createFamily, new FamilyController().create);
router.put('/:id', new FamilyController().create);

module.exports = router;
