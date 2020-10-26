const { wrapResponse } = require("../utils");
const { signUp, signIn } = require("../db/users");

const signUpUser = async (event, context) => {
	const body = JSON.parse(event.body);
	const addedUser = await signUp(body);
	return wrapResponse({
		message: "user created",
		data: addedUser,
	});
};
const signInUser = async (event, context) => {
	const body = JSON.parse(event.body);
	const loggedUser = await signIn(body);
	return wrapResponse({
		message: "user logged in",
		data: loggedUser,
	});
};

module.exports = {
	signUpUser,
	signInUser,
};
