const LocationModel = require('../models/location');
const TemplatesModel = require('../models/templates');

class TempsController {
    async createNew(req, res) {
        try {
            const {code, name} = req.body;
            const location = await LocationModel.findOne({code});
            const temp = new TemplatesModel({name})
            location.temps.push(temp);
            location.markModified('temps');
            await location.save()
            const locations = await LocationModel.find();
            return res.json(locations);
        } catch (e) {
            console.log(e)
        }
    }
    async setActive(req, res) {
        try {
            const {code, id} = req.body;
            const location = await LocationModel.findOne({code});
            for (let i of location.temps) {
                if (i.active == true) {
                    i.active = false
                    location.markModified('temps');
                    await location.save()
                    break
                }
            }
            for (let i of location.temps) {
                if (i._id == id) {
                    i.active = true
                    location.markModified('temps');
                    await location.save()
                    break
                }
            }
            const locations = await LocationModel.find();
            return res.json(locations);
        } catch (e) {
            console.log(e)
        }
    }
    async saveCode(req, res) {
        try {
            const {code, id, html, device} = req.body;
            const location = await LocationModel.findOne({code});
            for (let i of location.temps) {
                if (i._id == id) {
                    if (device === 'desktop') {
                        i.deskHtml = html
                    }
                    if (device === 'tablet') {
                        i.tabletHtml = html
                    }
                    if (device === 'phone') {
                        i.phoneHtml = html
                    }
                    location.markModified('temps');
                    await location.save()
                    break
                }
            }
            return res.json('Ok');
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TempsController();