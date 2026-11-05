const { model } = require("mongoose");
const { UserSchema } = require("../schemas/UsersSchema");

const UserModel = new model("user", UserSchema);

module.exports = { UserModel };

