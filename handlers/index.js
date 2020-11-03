const { listFriends,addFriends,updateFriends,deleteFriends,getFriendbyid } = require("./friends");
const {signUpUser,signInUser,authorizeUser} = require("./user")
module.exports = {
    listFriends,
    addFriends,
    getFriendbyid,
    updateFriends,
    deleteFriends,
    signUpUser,
    signInUser,
    authorizeUser
}