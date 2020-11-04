const { listFriends,addFriends,updateFriends,deleteFriends,getFriendbyid } = require("./friends");
const {signUpUser,signInUser} = require("./user")
module.exports = {
    listFriends,
    addFriends,
    getFriendbyid,
    updateFriends,
    deleteFriends,
    signUpUser,
    signInUser,
   
}