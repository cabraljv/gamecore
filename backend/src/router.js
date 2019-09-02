const express = require('express')
const multer = require('multer')
const router = express.Router()
const uploadConfig = require('../src/config/upload')
const UserController = require('./Controllers/UserController')
const PostController = require('./Controllers/PostController')
const CommentController = require('./Controllers/CommentController')
const upload = multer(uploadConfig);
router.get('/', (req, res) => {
  res.send('GameCore Backend OK')
})


router.post('/user', upload.single('profile_pic'), UserController.insert)
router.post('/user/login', UserController.index)
router.post('/post', upload.single('image'), PostController.insert)
router.post('/comment', CommentController.insert)
router.post('/destaque')

module.exports = router