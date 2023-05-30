const express = require("express");
const router = express.Router();

router.get("/mypage", function (req, res) {
  console.log(req.session); // 이미 이전에 세션이 있음을 검증함.
  res.render("mypage", req.session);
});

module.exports = router;
