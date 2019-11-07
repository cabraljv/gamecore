const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const ProjectController = require('./controllers/ProjectController')
const multer = require('multer');
const jwt = require('jsonwebtoken')
const gcsSharp = require('multer-sharp');
const storage = gcsSharp({
  bucket: 'gamecore-images',
  projectId: 'gamecore',
  keyFilename: 'gamecore-ec43971340ff.json',
  destination: 'public/image',
  acl: 'publicRead',
});
const CommentController = require('./controllers/CommentController')
const HighlightController = require('./controllers/HighlightController')
const upload = multer({ storage });

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers.authorization;

  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space

    req.token = bearerHeader;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}
routes.get('/', (req, res) => {
  res.send('GameCore Backend OK')
})
routes.post('/user', upload.single('profile_pic'), UserController.store)

routes.post('/user/login', UserController.index)

routes.post('/project', verifyToken, upload.single('cover_img'), ProjectController.store)
routes.post('/highlight', upload.fields([{ name: 'cover_img' }, { name: 'project_img' }]), HighlightController.store);
routes.post('/comment', verifyToken, CommentController.store)
routes.get('/highlight', HighlightController.index)
/*
//

*/
module.exports = routes