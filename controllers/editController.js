const EditImageModel = require('../models/editImage');
const uuid = require('uuid');
const path = require('path');

class EditController {
  async addImage(req, res) {
    try {
      console.log(req.files)
      const {image} = req.files;
      let fileName = uuid.v4() + '.jpg';
      image.mv(path.resolve(__dirname, '..', 'static', fileName))
      const location = new EditImageModel({image: fileName})
      await location.save()
      return res.json('fileName');
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new EditController();
