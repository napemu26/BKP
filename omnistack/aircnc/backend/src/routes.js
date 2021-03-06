const express = require('express');
const multer = require('multer');
const UploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboradController');

const routes = express.Router();
const upload = multer(UploadConfig);

//Criação de Users
routes.post('/sessions', SessionController.store);

routes.get('/dashboard', DashboardController.show);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail') , SpotController.store);

module.exports = routes;