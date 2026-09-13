const express = require('express');
const pdfUploadController = require('../controller/pdf.controller');
const upload = require('../middleware/upload.middleware');

const router = express.Router();
//                      the string name in postman must match string pdf here
router.post('/upload' , upload.single('pdf') , pdfUploadController.pdfUpload);


module.exports = router;