//dependencies

const data = require("../lib/data");
const { parseJsonToObject } = require("../utils/parseJSON");
const photoValidator = require("../utils/photoValidator");
const uniqid = require("uniqid");
const generateID = require("../utils/generateID");

//module scaffolding
const controller = {};

controller.getRandomUser = (req, res, next) => {
  data.read("users", "users", (err, users) => {
    if (!err && Array.isArray(users) && users.length > 0) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      res.status(200).json({
        success: true,
        message: "Random User",
        randomUser,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal server error. No users found",
      });
    }
  });
};