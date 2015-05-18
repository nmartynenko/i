var express = require('express');
var router = express.Router();

router.use('/', express.static(__dirname + '../../client/build/'));
router.use('/api/account', require('./api/account/index'));
router.get('/api/bankid/login', require('./api/bankid/login'));
router.use('/api/bankid/account', require('./api/bankid/account'));
router.use('/api/documents', require('./api/documents/index'));
router.use('/api/login', require('./api/login/index'));
router.use('/api/logout', require('./api/logout/index'));
router.get('/api/places', require('./api/places/index'));
router.use('/api/process-definitions', require('./api/process-definitions/index'));
router.get('/api/process-form', require('./api/process-form/get'));
router.post('/api/process-form', require('./api/process-form/post'));
router.get('/api/service', require('./api/service/index'));
router.get('/api/service/syncSubject', require('./api/service/syncSubject'));
router.get('/api/service/documents', require('./api/service/documents'));
router.get('/api/services', require('./api/services/index'));
router.post('/api/uploadfile', require('./api/uploadfile/post'));

router.use('/', function(req, res, next) {
	res.render(__dirname + '../../client/build/index.html');
	next();
});

module.exports = router;