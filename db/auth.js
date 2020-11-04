require("./connection")
const usersModel=require("../models/users")
const auth=async(email)=>{
    const result=await usersModel.findOne()
    return result;
  };
  module.exports={
      auth
    }