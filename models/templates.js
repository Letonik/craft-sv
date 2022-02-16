const {Schema, model} = require('mongoose');

const TemplateSchema = new Schema({
    name: {type: String, required: true},
    active: {type: Boolean, "default": false},
    createdOn: {type: Date, "default": Date.now},
    updateOn: {type: Date, "default": Date.now},
    deskHtml: {type: String, "default": '' },
    tabletHtml: {type: String, "default": ''},
    phoneHtml: {type: String, "default": ''},
})

const Template = model("Template", TemplateSchema);

module.exports = Template;