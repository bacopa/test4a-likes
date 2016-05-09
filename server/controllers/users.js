var mongoose = require("mongoose");
var User = mongoose.model("User");
var Post = mongoose.model("Post");
var moment = require("moment");
var bcrypt = require("bcryptjs");

module.exports = (function (req, res) {

	return {

		loginUser: function (req, res) {

			
		},

		createUser: function (req, res) {

			var username = req.body.username;

			User.findOne({username: username}, (err, username) => {
				
				if(err || username) return cb(err || { error: 'Username not available.' })
			});
					
			bcrypt.hash(req.body.password, 10, (err, hash) => {
				
				var newUser = new User({
					username: username,
					password: hash,
					likes: [],
					posts: []
				});

				newUser.save(function (err, data) {
					if(err){console.log("Error while saving new user...=( :", err)}
					else {
						res.send(data);
					}
				});
			});
		},

		getUsers: function (req, res) {
			User.find({}, function (err, results) {
				if(err) {
					console.log(err)
				} else {
					console.log(results)
					res.json(results)
				}
			})
		},

		putLike: function (req, res) {
			User.findById(req.params.userId, function (err, user) {
				if(err){return err}
				else {
					user.likes.push(req.params.postId);
					console.log("postId", req.params.postId)
					console.log("userId", req.params.userId)

				}
			});

			Post.findById(req.params.postId, function (err, post) {
				if(err){return err}
				else{
					console.log("post.find", post);
					post.likedBy.push(req.params.userId);
					res.send(post);
				}
			})
		},


	}

})();