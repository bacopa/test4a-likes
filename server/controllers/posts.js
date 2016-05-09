var mongoose = require("mongoose");
var User = mongoose.model("User");
var Post = mongoose.model("Post");
var moment = require("moment");
var bcrypt = require("bcryptjs");

module.exports = (function (req, res) {

	return {

		getPosts: function (req, res) {

			Post.find({})
			.populate("users")
			.exec(function (err, data) {
				err ? console.log(err) : res.send(data);
			});
		},

		createPost: function (req, res) {
			var id = req.params.id;
			User.findById(id, function (err, user) {

				var newPost = new Post({
					body: req.body.body,
					username: req.body.username,
					createAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
					likes: [],
					_user: id
				});
				console.log("user", user);
				user.posts.push(newPost);
				console.log("newPost", newPost);
				newPost.save(function (err, data) {
					console.log("data", data);
					if(err) {
						res.status(400).send(err);
					} 
					user.save(function (err, data) {
						if(err) {
							res.status(400).send(err);
						} else {
							res.send(data)}
					})

				})
			})
		},

		getOnePost: function (req, res) {
			Post.findById(req.params.postId, function (err, results) {
				if(err) {
					console.log(err)
				} else {
					console.log(results)
					res.json(results)
				}
			})
		}
	}

})();