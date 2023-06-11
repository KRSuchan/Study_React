const express = require("express");
const app = express();
const cors = require("cors");
const test = require("./routers/test");
const hostname = "127.0.0.1";
const port = 8080;
const server = async () => {
  try {
    //DB connection
    app.use(cors({ origin: "http://localhost:3000" }));
    app.use(express.json());
    app.use(test);
    app.listen(port, hostname, function () {
      console.log("server is running");
    });
  } catch (err) {
    console.log(err);
  }
};
server();

// const express = require("express");
// const login = require("./Login/login");
// const member = require("./routers/member");
// const app = express();
// const hostname = "127.0.0.1";
// const port = 3000;

// const session = require("express-session");
// const memorystore = require("memorystore");
// const MemoryStore = memorystore(session);

// const bodyParser = require("body-parser");
// const multer = require("multer");
// const form_data = multer();

// const cookieParser = require("cookie-parser");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(form_data.array());
// app.use(express.json());
// app.use(cookieParser());
// const maxAge = 1000 * 60 * 5; //Specifies the number (in milliseconds)

// const sessionObj = {
//   secret: "se",
//   resave: false,
//   saveUninitialized: true,
//   store: new MemoryStore({ checkPeriod: maxAge }),
//   cookie: {
//     maxAge: maxAge,
//   },
// };
// const mySession = session(sessionObj);
// app.use(mySession); //다른 미들웨어(login, member..)보다 먼저 적용

// app.use("/api/login", login);
// app.use("/member", member);
// app.set("view engine", "pug");

// app.use(function (req, res, next) {
//   const excludePath = ["/", "/favicon.ico", "/member/join", "/api/login"]; // 이런 곳은 로그인 체크를 하지 않는다.
//   const requestPath = req.path;
//   console.log(`[request url]${requestPath}`);
//   if (!excludePath.includes(requestPath)) {
//     //로그인을 처리해야 할 경로라면
//     console.log("login is required");
//     console.log(req.session);
//     if (!req.session.username) {
//       return res.redirect("/api/login");
//     }
//   }
//   next(); // **
// });

// app.get("/", function (req, res) {
//   return res.render("index");
// });

// app.listen(port, hostname, function () {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
