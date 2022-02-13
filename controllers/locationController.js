const LocationModel = require('../models/location');

class LocationController {
    async createNew(req, res) {
        try {
            const {name, image} = req.body;
            const check = await LocationModel.findOne({name});
            if (check) {
                throw new Error('Такой язык уже существует')
            }
            const location = new LocationModel({name, image})
            await location.save()
            return res.json('Локация успешно добавлена!');
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new LocationController();