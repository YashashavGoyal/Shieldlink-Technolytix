const express = require('express');
const { sendMsg, readMsg } = require('../controllers/contact-controller');
const authmiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');

const router = express.Router();

router.route("/send").post(sendMsg);

router.route('/read').get(authmiddleware, adminMiddleware, readMsg);


module.exports = router;