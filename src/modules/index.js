const router = require('express').Router();

const errorHandler = require('../middleware/errorHandler');
const postsRouter = require('./posts/posts.router');


router.get('/', (req, res) => res.send('api works.'));
router.use('/posts', postsRouter);
router.use(errorHandler);

module.exports = router;