const { wrapResponse } = require("../utils");
const { signUp, signIn, authorization } = require("../db/users");

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
		data: loggedUser
	});
};
const authorizeUser= async(event,context)=>{
	const body=JSON.parse(event.body);
	const user= await authorization(body);
	return wrapResponse({
		message:"user autherized",
		data:user
	})
}

module.exports = {
	signUpUser,
	signInUser,
	authorizeUser
};
