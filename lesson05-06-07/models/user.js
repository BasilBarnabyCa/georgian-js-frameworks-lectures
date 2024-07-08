// this model extending a plugin to add:
// password encryption, user serialization, and user deserialization and add password validation

const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const dataSchemaObject = {
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false
  },
};

const mongooseSchema = mongoose.Schema(dataSchemaObject);
mongooseSchema.plugin(plm);
module.exports = mongoose.model("User", mongooseSchema);
