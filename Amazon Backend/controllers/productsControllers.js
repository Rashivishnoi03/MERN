const productModel = require('../models/productsModels.js');

const getAllProducts = async(req, res) => {
    const data = await productModel.find();
    console.log(data);
    console.log(req.url);
    res.send({
    ststus: 'success',
    results: 0,
    data:{
        products: [],
    }
})
}
const addProduct = async(req, res) => {
   
   try{
     const data = await productModel.create(req.body);
    console.log(req.body);
    res.json({
        status:'success',
        results: 1,
        data:{
            products:data,
        }
    });
}

catch(err){
    console.log(err);
    res.json()
}
}

const replaceProducts = async(req, res) =>{
   try{
    const reqId = req.params.id;
    const data = {...req.body, reqId};
    const result = await productModel.findOneAndReplace({_id: reqId}, data);
    res.json({
        status:"sucess"
    }) 
}
catch(err){
    console.log(err);
}
}
module.exports = {
    getAllProducts,
    addProduct,
    replaceProducts
}