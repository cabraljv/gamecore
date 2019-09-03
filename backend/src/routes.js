const express = require('express')
const multer = require('multer')
const routes = express.Router()
const uploadConfig = require('./config/upload')
const UserController = require('./Controllers/UserController')
const DestaqueController = require('./Controllers/DestaqueController')
const PostController = require('./Controllers/PostController')
const upload = multer(uploadConfig);
routes.get('/', (req, res) => {
  res.send('GameCore Backend OK')
})


routes.post('/user', upload.single('profile_pic'), UserController.insert)
routes.get('/user/login', UserController.index)
routes.post('/post', upload.single('image'), PostController.insert)
//router.post('/comment', CommentController.insert)
routes.post('/destaque', upload.fields([{ name: 'capa' }, { name: 'img' }]), DestaqueController.store)
routes.get('/destaque', DestaqueController.index)
module.exports = routes