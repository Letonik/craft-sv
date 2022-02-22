const {Schema, model} = require('mongoose');

const EditImageSchema = new Schema({
  image: {type: String}
})

const EditImage = model("editImage", EditImageSchema);

module.exports = EditImage;
