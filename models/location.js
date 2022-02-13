const {Schema, model} = require('mongoose');
const TemplateSchema = require("./templates.js").schema;

const LocationSchema = new Schema({
    name: {type: String, unique: true, required: true},
    image: {type: String},
    temps: [TemplateSchema]
})

const Location = model("Location", LocationSchema);

module.exports = Location;

