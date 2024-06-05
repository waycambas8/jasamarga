var express = require('express');
const FamilyBrowseController = require('../modules/controller/family/familyBrowseController');
var router = express.Router();
    
/* GET home page. */
router.get('/', new FamilyBrowseController().all);
router.get('/:id', new FamilyBrowseController().detail);

module.exports = router;
