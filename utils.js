const wrapResponse = (body, statusCode = 200) => {
	return {
		statusCode,
		body: JSON.stringify(body),
	};
};

module.exports = {
    wrapResponse
}