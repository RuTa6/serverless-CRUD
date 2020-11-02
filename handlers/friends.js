const { wrapResponse } = require("../utils");
const jwt = require("jsonwebtoken");
const { listFriend, addFriend, updateFriend, deleteFriend } = require("../db/friends");

// function autherize(str){
// 	const token=str.headers.authentication
// 	return token

// //   if (str == null) {
// //     return (false)
// // } else return (true)
// }


const listFriends = async (event, context) => {
	//if (autherize=== true){
	//  const str=JSON.parse(event.body);
	//  const auth=autherize(str)
	const fetcheddData = await listFriend();
		return wrapResponse({
		//message:auth,//"friends fetched",
		data: fetcheddData,
	});
//} else {
// 	return wrapResponse({
// 		message: "error occured,no auth found",
// 	})
// }

}
const addFriends = async (event, context) => {
	const body = JSON.parse(event.body);
	const addedData = await addFriend(body);
	return wrapResponse({
		message: "friend added",
		data: addedData,
	});
};
const updateFriends = async (event, context) => {
	const body = JSON.parse(event.body);
	const id = JSON.parse(event.params.id);
	const updatedData = await updateFriend(id, body);
	return wrapResponse({
		message: "friend updated",
		data: updatedData,
	});
};
const deleteFriends = async (event, context) => {
	const id = event.pathParameters.id;
	console.log((id))
	const deletedData = await deleteFriend(id);
	return wrapResponse({
		message: "friend deleted",
		data: deletedData
	})
};



module.exports = {
	listFriends,
	addFriends,
	updateFriends,
	deleteFriends
};
