const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/random");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
}).array("productImage", 10);

module.exports = upload;
