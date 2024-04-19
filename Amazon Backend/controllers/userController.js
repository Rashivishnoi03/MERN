const fsPromise=require('fs/promises')
const userModel = require('../models/userModel')
const getAllUser = async(req, res) => {
    const data=await userModel.find();
    // console.log(data)
    console.log(req.url)
    res.send({
        status:'success',
        results:0,
        data:{
            users: data,
        }
    })
}

const addUser=async(req,res)=>{
    try{
        const {_id,...reqdata}=req.body
        const data=await userModel.create(reqdata);
        console.log(data)
        console.log(req.body)
        res.json({
            status:'false',
            data:{
                users:data
            }
        });
    }
    catch(err){
        res.json({
            status:'success',
            message:JSON.stringify(err)
        })
    }
}

const editUser=async(req,res)=>{
    try{
        const reqId=req.params.id;
        const data={...req.body,reqId}
        const result=await userModel.findOneAndReplace({_id:reqId},data);
        res.json({
            status:'success',
            data:{
                users:result,
            }
        });
    }
    catch(err){
        res.json({
            status:'success',
            message:JSON.stringify(err)
        })
    }
}

const deleteUser=async(req,res)=>{
    try{
        const reqId = req.params.id
        const result=await userModel.deleteOne({_id:reqId});
        res.json({
            status: 'success',
            data: {
                users: null
            }
        })
    }
    catch(err){
        res.json({
            status:'success',
            message:JSON.stringify(err)
        })
    }
}
module.exports={
    getAllUser,
    addUser,
    editUser,
    deleteUser
}

