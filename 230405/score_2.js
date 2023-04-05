var express = require("express")
var app = express();    //서버 만들었음
var ejs = require("ejs");
app.set("view engine", ejs);
app.use(express.urlencoded({extended:false}));

let scoreData = [
    {id:1, name:"홍길동", kor:90, eng:80, mat:100}
];    //데이터로 사용한다

//url은 서버 전체에서 유일 score/list
app.get("/score/list", (req, res)=>{
    //views/score/score_list.ejs
    //express framework가 디자인파일들은 views 폴더에 놓기로 약속
    //response 객체에 render라는 함수를 express가 추가
    //첫번째 매개변수 : html 파일
    //두번째 매개변수 : 데이터를 JSON형태로 전달해야 한다
    //이 두개를 합해서 새로운 문서를 만들어 클라이언트로 전송한다
    res.render("/score/score_list.ejs", {scoreList:scoreData})
});

app.get("/score/view/:id", (req, res) => {
});
app.get("/score/write", (req, res) => {
});
app.post("/score/save", (req, res) => {
});
app.use("/", (request, response)=>{
    response.render("index.ejs");
});
app.use((request, response) => {
  response.writeHead(200, { "Content-type": "text/html" });
  response.end("<H1>404 Error</H1>")
});
app.listen(4000, () => {
  console.log("server start http://127.0.0.1:4000");
})