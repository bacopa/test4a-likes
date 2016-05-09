var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
 
	body: {type: String, required: true},
	createdAt: {type: String, required: true},
	username: {type: String, required: true},
	likedBy: [{type: Schema.Types.ObjectId, ref: "User"}],
	_user: {type: Schema.Types.ObjectId, ref: "User"}
});

mongoose.model("Post", PostSchema);