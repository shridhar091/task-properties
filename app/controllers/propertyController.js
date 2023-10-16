
const Property = require('../models/property-model')

const propertyController = {}

propertyController.create = async (req, res) => {
    try {

        const { body } = req
        const image = req.file.path
        const savedProperty = await Property.create({...body,image:image})

        if (savedProperty) {
            res.json(savedProperty)
        } else {
            res.json({})
        }
    } catch (err) {
        res.json(err)
    }
}


propertyController.search = async (req, res) =>{
        const { search } = req.query
        try{
            if(search.length==0){
                const properties = await Property.find()
                res.json({items:properties})
            }else{
                const regex = new RegExp(search, 'i');
                const items = await Property.find({
                    $or: [
                      { location: { $regex: regex } },
                      { project: { $regex: regex } }
                    ]
                  }).exec();
              
                  res.json({ items });
            }
           
        }catch(e){
            res.json(e)
        }
}



propertyController.list = async (req, res) =>{
    try{
        const properties = await Property.find()
        res.json(properties)
    }catch(e){
        res.json(e)
    }
}


propertyController.filterList = async (req,res) =>{
    try {
        const {filter} = req.query
         const properties = await Property.find({purchaseType:filter})
         res.json(properties)
    }catch(e){
        res.json(e)
    }
}

propertyController.filterCategory = async (req,res) =>{
    try{
        const {filter1,filter2} = req.query
        if(filter1){
            const properties = await Property.find({purchaseType:filter1,propertyType:filter2})
            res.json(properties)
        }
        else{
            const properties = await Property.find({propertyType:filter2})
            res.json(properties)
        }
    }catch(e){
        res.json(e)
    }
}

propertyController.sortProperty = async (req, res) => {
    try {
        
        const type = req.query.type
            let property
            if(type == 'Amount-Low to High') {
                property = await Property.find().sort({amount: 1})
            } else if(type == 'Amount-High to Low') {
                property = await Property.find().sort({amount: -1})
            } 
            res.json(property)
    } catch (error) {
        res.json(error)
    }
}
module.exports = propertyController
