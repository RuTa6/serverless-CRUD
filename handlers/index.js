const { listFriends,addFriends,updateFriends,deleteFriends } = require("./friends");
const {signUpUser,signInUser} = require("./user")
module.exports = {
    listFriends,
    addFriends,
    updateFriends,
    deleteFriends,
    signUpUser,
    signInUser
}