const mongoose=require("mongoose")
const dateOnly = require('mongoose-dateonly')(mongoose);
const friendsModel=new mongoose.Schema({
    userId: {
        type: String,
        required: true,
      },
      fullName: {
        type: String,
      },
      address: {
        type: String,
      },
      contactNumber: {
        type: String,
      },
      dateOfBirth:{
          type:dateOnly
      }
})
module.exports = mongoose.model("friends", friendsModel);