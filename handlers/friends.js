const { wrapResponse } = require("../utils");
const jwt = require("jsonwebtoken");
const {
  listFriend,
  addFriend,
  updateFriend,
  deleteFriend,
  getFriend,
} = require("../db/friends");


const listFriends = async (event, context) => {
  
  //const uid=event.params.id
  //console.log(uid)
  const fetcheddData = await listFriend();
  return wrapResponse({
    message:"friends fetched",
    data: fetcheddData,
  });
 
};
const addFriends = async (event, context) => {
  const body = JSON.parse(event.body);
  const addedData = await addFriend(body);
  return wrapResponse({
    message: "friend added",
    data: addedData,
  });
};
const getFriendbyid = async (event, context) => {
  const id = event.pathParameters.id;
  const fetcheddData = await getFriend(id);
  return wrapResponse({
    message: "friend fetched",
    data: fetcheddData,
  });
};
const updateFriends = async (event, context) => {
  const body = JSON.parse(event.body);
  const id = event.pathParameters.id;
  const updatedData = await updateFriend(id, body);
  return wrapResponse({
    message: "friend updated",
    data: updatedData,
  });
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
