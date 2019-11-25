var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/chat", function(req, res, next) {
  res.render("chat", { title: "Chat" });
});

router.get("/chat2", function(req, res, next) {
  res.render("chat2", { title: "Chat2" });
});

module.exports = router;
