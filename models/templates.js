const {Schema, model} = require('mongoose');

const TemplateSchema = new Schema({
    name: {type: String, required: true},
    active: {type: Boolean, "default": false},
    createdOn: {type: Date, "default": Date.now},
    updateOn: {type: Date, "default": Date.now},
    deskHtml: {type: String, "default": 'eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPENWZsZXhEaXJlY3Rpb24iOiJjb2x1bW4iLCJhbGlnbkl0ZW1zIjrFJi1zdGFydCIsImp1c3RpZnnEYGVudNAeZmlsbFNwYWPkAINubyIsInBhZGRpbmciOlsiNDAiLM4FXSwibWFyZ2luxB/EFMoEXSwiYmFja2dyb3VuZOUA4CI6MjU1LCJnxwhixwhhIjoxfSzkALpvcscoMMUmMMUkMMkic2hhZG93xRJyYWRpdXPFC3dpZHRoIjoiMTAwJSIsImhlaWdo5ADWMzk2cHgiLCJtaW5IyBQ1MDBweOQBUGRpc3BsYXnxAWssImN1c3RvbeQAiM4kQXBwxDloaWRkZW4iOmZhbHNlLCJub2RlcyI6W10sImxpbmtlZE7GEXt9fX0=' },
    tabletHtml: {type: String, "default": ''},
    phoneHtml: {type: String, "default": ''},
})

const Template = model("Template", TemplateSchema);

module.exports = Template;