require("./connection")
const friendsModel=require("../models/friends")

//add friend
const addFriend = async (body) => {
    const friendsmodel = new friendsModel({
      userId: "5f8d69b56ca67e5066357b03",
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
const listFriend = async () => {
    const results = await friendsModel.find()
    return results;
  };

//update friend
const updateFriend = async (id, body) => {
    const result = await friendsModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        userId: "5f8d69b56ca67e5066357b03",
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
    deleteFriend
    
}