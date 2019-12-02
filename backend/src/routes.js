const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const ProjectController = require('./controllers/ProjectController')
const multer = require('multer');
const jwt = require('jsonwebtoken');
const gcsSharp = require('multer-sharp');
const storage = gcsSharp({
  bucket: 'gamecore-images',
  projectId: 'gamecore',
  keyFilename: 'gamecore-ec43971340ff.json',
  destination: 'public/image',
  acl: 'publicRead',
});
const CommentController = require('./controllers/CommentController');
const HighlightController = require('./controllers/HighlightController');
const upload = multer({ storage });
const ProjectVersionController = require('./controllers/ProjectVersionController');
const TopDevController = require('./controllers/TopDevsController')
async function verifyToken(req, res, next) {

  const bearerHeader = await req.headers.authorization;

  if (typeof bearerHeader !== 'undefined') {

    req.token = bearerHeader;
    await jwt.verify(req.token, 'g4m3c0r32oi9', (err, dec) => {
      if (err) {
        res.json({ cod: 403, response: "Invalid token" });

      } else {
        next();
      }
    });

  } else {
    res.json({ cod: 403, response: "Invalid token" });

  }

}
routes.get('/', (req, res) => {
  res.send('GameCore Backend OK')
});
routes.post('/user', upload.single('profile_pic'), UserController.store);
routes.post('/user/login', UserController.show);
routes.post('/project', verifyToken, upload.single('cover_img'), ProjectController.store);
routes.post('/highlight', upload.fields([{ name: 'cover_img' }, { name: 'project_img' }]), HighlightController.store);
routes.post('/comment', verifyToken, CommentController.store);
routes.get('/highlight', HighlightController.index);
routes.post('/project/version', verifyToken, ProjectVersionController.store);
routes.get('/user/topdev', TopDevController.index);
module.exports = routes