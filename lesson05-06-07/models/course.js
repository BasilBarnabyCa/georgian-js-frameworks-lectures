const mongoose = require("mongoose");
const dataSchemaObject = {
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
};
const mongooseSchema = mongoose.Schema(dataSchemaObject);
module.exports = mongoose.model("Course", mongooseSchema);