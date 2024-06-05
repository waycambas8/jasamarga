var express = require('express');
const ProfilerowseController = require('../modules/controller/profile/profileBrowseController');
var router = express.Router();
    
/* GET home page. */
router.get('/', new ProfilerowseController().all);
router.get('/:id', new ProfilerowseController().detail);

module.exports = router;
