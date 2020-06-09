 const router = require('express').Router();
const handlers = require('../handlers');


router.get( '/select-category', handlers.jobPost.selectCategory);
router.post('/select-service', handlers.jobPost.selectService)
module.exports = router;