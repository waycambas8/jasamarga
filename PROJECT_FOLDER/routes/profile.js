var express = require('express');
const ProfilerowseController = require('../modules/controller/profile/profileBrowseController');
const createProfile = require('../modules/middleware/profile/create');
const ProfileController = require('../modules/controller/profile/profileController');
var router = express.Router();
    
/* GET home page. */
router.get('/', new ProfilerowseController().all);
router.get('/:id', new ProfilerowseController().detail);

router.post('/', createProfile, new ProfileController().create);
router.put('/:id', new ProfileController().create);

module.exports = router;
