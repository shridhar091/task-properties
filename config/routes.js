const express = require('express')
const multer = require('multer')
const router = express.Router()

const propertyController=require('../app/controllers/propertyController')

const upload = multer({dest:'uploads/'})



router.post('/api/properties',upload.single('image'),propertyController.create)
router.get('/api/properties/all',propertyController.list)
router.get('/api/properties/search', propertyController.search)
router.get('/api/properties/filterPurchase', propertyController.filterList)
router.get('/api/properties/filterCategory',propertyController.filterCategory)
router.get('/api/properties/sort',propertyController.sortProperty )

 module.exports = router