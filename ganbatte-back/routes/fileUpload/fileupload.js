const express = require("express");
const router = express.Router();
const passport = require("passport");
var multer = require("multer");

const fileController = require("./controllers/FileController");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(
      null,
      "/Users/mike/Documents/codeImmersives/term-2/projects/ganbatte/ganbatte-front/public/"
    );
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var upload = multer({ storage: storage }).single("file");

router.post("/uploadFile", (req, res) => {
  console.log(req.params);

  // upload(req, res, function(err) {
  //   if (err instanceof multer.MulterError) {
  //     return res.status(500).json(err);
  //   } else if (err) {
  //     return res.status(500).json(err);
  //   }
  //   return res.status(200).send(req.file);
  // });
});

module.exports = router;
