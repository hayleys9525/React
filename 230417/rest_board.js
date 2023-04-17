// https://songhee96.tistory.com/27

let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");
let commonUtil = require("./commonUtil");

let multer = require("multer");
let path = require("path");
const { link } = require('fs');
let storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, "/uploads/board");
    },
    filename: function(req, file, cb){
        //new Date => 현재 날짜와 시간, 분초까지 알아온다. =>valueOf() 문자열로 변경
        //본래 파일명이 중복날 가능성이 있어서 별도의 파일명을 부여한다
        //확장자는 본래파일명으로 해야 한다.
        //path.extname(파일명) - 파일의 확장자를 가져온다.
        //두번째 인자인 file이 업로드되는 파일인데 이 파일의 originalfilename에 원래
        //파일명이 있다
        let newFilename = new Date().valueOf() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});
let upload = multer({storage:storage});

//upload.single("file")-파일 업로드 부분만 중간에 따로 처리한다
//upload.single(폼태그에서 file속성의 name이 file이다)
//<input type="file" name="file" /> 이때 name 속성값이다
//파일 전송시 form 태그에 enctype="form-data/multipart" 속성이 반드시 있어야 한다
//ajax로 전송할때는 FormData라는 객체를 이용해서 보내야 한다