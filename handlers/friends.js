const { wrapResponse } = require("../utils");
const { listFriend, addFriend, updateFriend } = require("../db/friends");

const listFriends = async (event, context) => {
	const fetcheddData = await listFriend();
	//console.log("List friends called");
	return wrapResponse({
		message: "friends fetched",
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
	const id = JSON.parse(event.params.id);
    const deletedData = await deleteFriend(id);
    return wrapResponse({
        message:"friend deleted",
        data:deletedData
    })
};



module.exports = {
	listFriends,
	addFriends,
	updateFriends,
	deleteFriends
};
