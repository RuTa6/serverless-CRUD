require("./connection")
const friendsModel=require("../models/friends")


//add friend
const addFriend = async (body,id) => {
    const friendsmodel = new friendsModel({
      userId: id,
      fullName: body.fullName,
      address: body.address,
      contactNumber: body.contactNumber,
      dateOfBirth:body.dateOfBirth
    });
    console.log("Adding new friend");
  
    const results = await friendsmodel.save();
    return results;
  };
//list friends
const listFriend = async (userId) => {
    const results = await friendsModel.find({userId:userId})
    return results;
  };
//get friend by id
const getFriend=async(id)=>{
  const result=await friendsModel.findOne()
  return result;
};
//update friend
const updateFriend = async (id, body) => {
    const result = await friendsModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        userId:body.uId,
        fullName: body.fullName,
        address: body.address,
        contactNumber: body.contactNumber,
      },
      {
        new: true,
      }
    );
    return result;
  };
  //delete friend
  const deleteFriend = async (id) => {
    const result = await friendsModel.findByIdAndRemove(id);
    return result;
  };
module.exports={
    listFriend,
    addFriend,
    updateFriend,
    deleteFriend,
    getFriend
}