const {Schema, model} = require('mongoose');

const TemplateSchema = new Schema({
    name: {type: String, unique: true, required: true},
    active: {type: Boolean, "default": false},
    createdOn: {type: Date, "default": Date.now},
    updateOn: {type: Date, "default": Date.now},
    deskHtml: {type: String},
    tabletHtml: {type: String},
    phoneHtml: {type: String},
})

const Template = model("Template", TemplateSchema);

module.exports = Template;