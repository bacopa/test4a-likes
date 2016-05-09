var users = require("./../controllers/users.js");
var posts = require("./../controllers/posts.js");


module.exports = function(app) {

	app.get("/posts", function (req, res) {
		posts.getPosts(req, res);
	});

	app.get("/post/:postId", function (req, res) {
		posts.getOnePost(req, res);
	});

	app.post("/posts/user/:id", function (req, res) {
		posts.createPost(req, res); 
	});

	app.post("/user", function (req, res) {
		users.createUser(req, res); 
	});

	app.put("/like/post/:postId/user/:userId", function (req, res) {
		users.putLike(req, res);
	});

	app.get("/posts/likes", function (req, res) {
		users.getLikes(req, res);
	});

	app.get("/posts/user/:id", function (req, res) {
		users.getUserById(req, res);
	});

	app.get("/users", function (req, res) {
		users.getUsers(req, res);
	});

	app.delete("/posts/user/:id", function (req, res) {
		posts.removeLike(req, res);
	});

	app.delete("/user/:id", function (req, res) {
		users.removeUser(req, res);
	});

	app.put("/posts/users/:id", function (req, res) {
		users.updateUser(req, res);
	})

	app.put("/posts/:id", function (req, res) {
		posts.updatePost(req, res);
	})
}