const LocationModel = require('../models/location');
const uuid = require('uuid');
const path = require('path');

class LocationController {
    async createNew(req, res) {
        try {
            const {name, code} = req.body;
            const {image} = req.files;
            const check = await LocationModel.findOne({name});
            if (check) {
                throw new Error('Такая локация уже существует')
            }
            let fileName = uuid.v4() + '.jpg';
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const location = new LocationModel({name, code, image: fileName})
            await location.save()
            return res.json('Локация успешно добавлена!');
        } catch (e) {
            console.log(e)
        }
    }
    async getAll(req, res) {
        try {
            const locations = await LocationModel.find();
            return res.json(locations);
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new LocationController();