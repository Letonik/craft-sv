const LocationModel = require('../models/location');
const TemplatesModel = require('../models/templates');

class TempsController {
    async createNew(req, res) {
        try {
            const {name} = req.body;
            const location = await LocationModel.findOne({ _id: '620979ca2cce88fddc6248d1' });
            const check = await location.temps.findOne({name});
            if (check) {
                throw new Error('Такой шаблон уже существует')
            }
            const temp = new TemplatesModel({name})
            location.temps.push(temp);
            location.markModified('temps');
            await location.save()
            return res.json('Шаблон успешно добавлен');
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TempsController();