const LocationModel = require('../models/location');
const TemplatesModel = require('../models/templates');

class TempsController {
    async createNew(req, res) {
        try {
            const {code, name, descHtml, tabletHtml, phoneHtml} = req.body;
            const location = await LocationModel.findOne({code});
            /*const check = await location.temps.findOne({name});
            if (check) {
                throw new Error('Такой шаблон уже существует')
            }*/
            const temp = new TemplatesModel({name, descHtml, tabletHtml, phoneHtml})
            location.temps.push(temp);
            location.markModified('temps');
            await location.save()
            const locations = await LocationModel.find();
            return res.json(locations);
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TempsController();