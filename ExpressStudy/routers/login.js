const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  console.log(`login request: ${req.session}`);
  return res.render("login");
});
router.post("/", function (req, res) {
  const { name, age } = req.body;
  console.log("login post request");
  req.session.username = "kim"; //서버에 있는 세션 객체에 저장되는 값
  // res.cookie("username", name);
  res.redirect("/member/mypage");
});

module.exports = router;

router.get("/logout", (req, res) => {
  res.clearCookie("username");
  //res.cookie("username", "", { maxAge: 0 });
  res.render("login");
});
