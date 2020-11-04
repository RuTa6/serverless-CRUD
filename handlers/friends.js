const { wrapResponse } = require("../utils");
const jwt = require("jsonwebtoken");
const {auth} =require("../db/auth")
const {
  listFriend,
  addFriend,
  updateFriend,
  deleteFriend,
  getFriend,
} = require("../db/friends");


const authFunc = async(authToken)=>{
  const str = authToken
  let verification
  if (str == "Bearer "+ null) {
    verification="no auth token"
  } else {
    const string = str.split(" ");
    const token = string[1];
    // verify token
    jwt.verify(token, "secretKey123", (err, result) => {
      if (!err) {
        console.log(result.email)
        verification=auth(result.email)
        console.log(verification) 
      } else {
        // if doesnot match, return error - invalid token
        verification="error:"+err 
      }
    });
  }
  return verification
}


const listFriends = async (event, context) => {
  const crudAuth=await authFunc(event.headers.authentication)
  if(crudAuth._id==undefined){
    return wrapResponse({   
      message:"auth error",
      data:"auth error"
    })
  }else{
  const fetcheddData = await listFriend(crudAuth._id);
  console.log(fetcheddData)
  return wrapResponse({
    message:"friends fetched",
    data: fetcheddData,
  });
}
};

const addFriends = async (event, context) => {
  const crudAuth=await authFunc(event.headers.authentication)
  if(crudAuth._id==undefined){
    return wrapResponse({   
      message:"auth error",
      data:"auth error"
    })
  }else{
  const body = JSON.parse(event.body);
  const addedData = await addFriend(body,crudAuth._id);
  return wrapResponse({
    message: "friend added",
    data: addedData,
  });
}
};
const getFriendbyid = async (event, context) => {
  const crudAuth=await authFunc(event.headers.authentication)
  if(crudAuth._id==undefined){
    return wrapResponse({   
      message:"auth error",
      data:"auth error"
    })
  }else{
  const id = event.pathParameters.id;
  const fetcheddData = await getFriend(id);
  return wrapResponse({
    message: "friend fetched",
    data: fetcheddData,
  });
}
};
const updateFriends = async (event, context) => {
  const crudAuth=await authFunc(event.headers.authentication)
  if(crudAuth._id==undefined){
    return wrapResponse({   
      message:"auth error",
      data:"auth error"
    })
  }else{
  const body = JSON.parse(event.body);
  const id = event.pathParameters.id;
  const updatedData = await updateFriend(id, body);
  return wrapResponse({
    message: "friend updated",
    data: updatedData,
  });
}
};
const deleteFriends = async (event, context) => {
  const id = event.pathParameters.id;
  console.log(id);
  const deletedData = await deleteFriend(id);
  return wrapResponse({
    message: "friend deleted",
    data: deletedData,
  });
};

module.exports = {
  listFriends,
  addFriends,
  updateFriends,
  deleteFriends,
  getFriendbyid,
};
