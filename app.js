let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const session = require("express-session");
const MYSQLSTORE = require("express-mysql-session");
const DBInfo = require("./routes/commonDB"); //세션이 저장될 디비정보를 줘야한다

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let boardRouter = require("./routes/board"); //hello/routes/board.js를 실행. (모듈을 메모리에 가져온다.)
 //hello/routes/board.js를 실행. (모듈을 메모리에 가져온다.)
let memberRouter = require("./routes/member"); //아무리 모듈을 만들어도 app에서 불러주지 않으면 의미가 없다.. 이건 모든 프로그래밍이 마찬가지다. 

let ajaxRouter = require("./routes/ajaxtest"); //아무리 모듈을 만들어도 app에서 불러주지 않으면 의미가 없다.. 이건 모든 프로그래밍이 마찬가지다. 
let app = express();

// view engine setup(내부 환경변수 설정)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 미들웨어 - 모든 웹상의 요청이 거쳐간다.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
let sessionStore=new MYSQLSTORE(DBInfo.DBInfo);
app.use(session({
  key: "session_key",
  secret: "gpfla",
  store:sessionStore,
  resave:false,
  saveUninitialized:false
}));
// static이 붙은 건  image, css, js
// nodejs가 __(언더바 2개)로 시작하는 변수나 함수는...내장변수나 내장함수다.(nodeJS에 이미 만들어진 변수 혹은 함수.)
// 따라서, __dirname은 이미 nodeJS에 만들어진 변수인데 이는 현재 디렉토리 경로를 갖고 있는 것이다. 
// path.join : path - 전체 디렉토리 경로에 대한 관리를 도와준다. : join 합친다.
// path.join(__dirname, 'public') c:/temp/public 형태로 전체 경로를 만들어준다. 
// path.join(__dirname, 'happyguy) c:/temp/happyguy 형태임. dirname(c:/temp) + join('happyguy') => c:/temp/happyguy
// c:\temp\public  은 윈도우에서.... 안먹는다.  c:\\temp\\public
// 유닉스는 서버 전용 리눅스는 최초로 개인용 pc에 설치할 수 있음...(유닉스를 본따서 만들어진 os)
app.use(express.static(path.join(__dirname, 'public')));
console.log(DBInfo.DBInfo);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
app.use("/member", memberRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

app.post('/login', function(req, res) {
  const {id, password} = req.body; // 클라이언트에서 전송한 요청 데이터를 추출
  if (id === 'root' && password === '1234') { // 요청 데이터를 이용하여 로그인 처리
    res.send('success');
  } else {
    res.status(401).send('fail'); // 인증 실패 시 401 상태 코드를 반환
  }
});

  // 사용자 인증 로직
  // ...

  if (authenticated) {
    res.status(200).send("success");
  } else {
    res.status(401).send("failure");
  }
});

module.exports = app;
