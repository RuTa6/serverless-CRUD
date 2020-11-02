const { listFriends,addFriends,updateFriends,deleteFriends } = require("./friends");
const {signUpUser,signInUser,authorizeUser} = require("./user")
module.exports = {
    listFriends,
    addFriends,
    updateFriends,
    deleteFriends,
    signUpUser,
    signInUser,
    authorizeUser
}