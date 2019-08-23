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


router.post('/user/insert', upload.single('profile_pic'), UserController.insert)
router.post('/user/login', UserController.verifica)
router.post('/post/insert', upload.single('image'), PostController.insert)
router.post('/comment/add', CommentController.insert)
module.exports = router