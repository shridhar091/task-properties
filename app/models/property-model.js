const mongoose=require('mongoose')
const {Schema,model}=mongoose
const propertySchema= new Schema({
    location:{
        type:String,
        required:true
    },
    propertyType:{
        type:String,
        required:true
    },
    purchaseType:{
        type : String,
        enum : ['Buy','Rent','PG/Co-Living']
    },
    project:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    image:String,
})

const Property = model('Property', propertySchema)

module.exports=Property