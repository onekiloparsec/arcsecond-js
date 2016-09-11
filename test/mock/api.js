import objects from '../fixtures/objects';

export default function (nock) {
	const server = nock('http://localhost');

	server
		.get('/objects')
		.reply(200, objects);

	// server
	// 	.post('/articles')
	// 	.reply((uri, requestBody) => {
	// 		return [201, requestBody.toString()];
	// 	});

	articles.forEach((object) => {
		server
			.get(`/objects/${object._id}`)
			.reply(200, object);

		// server
		// 	.delete(`/articles/${article._id}`)
		// 	.reply((uri, requestBody) => {
		// 		return [200, requestBody.toString()];
		// 	});

		// if (!comments[article._id]) {
		// 	return;
		// }

		// server
		// 	.get(`/articles/${article._id}/comments`)
		// 	.reply(200, comments[article._id]);
		// 
		// comments[article._id].forEach((comment) => {
		// 	server
		// 		.get(`/articles/${article._id}/comments/${comment.id}`)
		// 		.reply(200, comment);
		// 
		// 	server
		// 		.put(`/articles/${article._id}/comments/${comment.id}`)
		// 		.reply((uri, requestBody) => {
		// 			return [200, requestBody.toString()];
		// 		});
		// });
	});

	return server;
}
