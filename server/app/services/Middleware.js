const multer  = require('multer');

const path = require("path");

const { v4: uuidv4 } = require("uuid"); 


const storagePicture = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './public/uploads')
    },
    filename(req, file, cb) {
      const uniqueId = uuidv4();
      const fileName = `${uniqueId}${path.extname(file.originalname)}`;
      req.body.pictures = fileName;
      cb(null, fileName)
    }
  })


  const upload = (req, res, next) => {
    const uploadPicture = multer({ storage: storagePicture });
    return uploadPicture.single("pictures")(req, res, next);
  };

  module.exports = {upload}