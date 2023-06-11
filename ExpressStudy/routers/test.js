const express = require("express");
const router = express.Router();

router.get("/apitest", function (req, res) {
  //DB에서 데이터를 조회하는 코드
  res.send([
    { id: 1, text: "리액트의 기초 알아보기", checked: true },
    { id: 2, text: "컴포넌트 스타일링해 보기", checked: true },
    { id: 3, text: "일정 관리 앱 만들어 보기", checked: false },
  ]);
});

module.exports = router;
