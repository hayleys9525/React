var express = require("express");
var app = express(); 
var ejs = require("ejs");
app.set("view engine", ejs);
app.use(express.urlencoded({extended:false}));
let scoreData = [
    {id:1, name:"홍길동", kor:90, eng:80, mat:100}
]
//////// express를 쓰면 fs.readFile을 안 써도...어디에 있든 간에 이를 돌려줌...
// 서버 통틀어서 url은 유일해야한다....ucdrl들은 서로 다 달라야함. 
app.get("/score/list", (req, res)=>{
    //views/score/score_list.ejs
    //express framework가 view파일들을 views폴더에 넣기로 약속되어있음. 그래서 폴더 어디에 있든 상관없음..
    //물론 완전 이상한 곳이 아니고...views폴더가 있는 곳에서 js파일이 실행되면 가능함. 
    //res.render()라는 함수는 render라는 함수를 express가 추가함. 
    // 첫번째 매개변수 : html파일이고
    // 두번째 매개변수 : 데이터임. 데이터를 JSON형태로 전달함. 
    // render는 이 두 매개변수를 합쳐서 클라이언트로 보내줌. (프론트 서버가 웹에 뿌려줌. )
    res.render("score/score_list.ejs", {scoreList:scoreData})
});
app.get("/score/view/:id", (req, res)=>{
let id = req.params.id;
//fitler 조건을 만족하는 모든 데이터셋(배열)
//find는 조건을 만족하는 첫번째 데이터만(배열 아님)
let scoreItem = scoreData.find(score=>score.id==id);
res.render("score/score_view.ejs", {score:scoreItem});
});
app.get("/score/write", (req, res)=>{
res.render("score/score_write.ejs");
});
app.post("/score/save", (req, res)=>{
    let name = req.body.name;
    let kor = req.body.kor;
    let eng = req.body.eng;
    let mat = req.body.mat;
    let id = 0; //제일 마지막에 있는 데이터의 id+1을 해야 한다
    id = scoreData[scoreData.length-1].id+1;
    //JSON으로 데이터를 만들어서 배열에 추가한다
    data = {id:id, name:name, kor:kor, eng:eng, mat:mat};
    scoreData.push(data);
    //redirect함수를 이용해서 /score/list를 호출해야한다
    res.redirect("/score/list");

});
app.use("/", (req, res)=>{
    res.render("index.ejs");
});
app.use((req, res)=>{
    res.writeHead(200, {"Content-tye" : "text/html"});
    res.end("<h1> 404 Error</h1>");
});
app.listen(7000, ()=>{
    console.log("server start http://127.0.0.1:5000 ");
})