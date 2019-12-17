const File = require("../models/File");
const User = require("../../users/models/User");

module.exports = {
  createfile: params => {
    return new Promise((resolve, reject) => {
      User.findById(params.id)
        .then(user => {})
        .catch(error => reject(error));
    });
  }
};
