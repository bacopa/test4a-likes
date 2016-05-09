var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
 
	username: {type: String, required: true, unique: true },
	likes: [{type: Schema.Types.ObjectId, ref: "Message"}],
	posts: [{type: Schema.Types.ObjectId, ref: "Message"}]
});

mongoose.model("User", UserSchema);