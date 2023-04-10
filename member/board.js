let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");
let commonUtil = require("./commonUtil");
/* GET home page. */
router.get('/', async function(req, res, next) {
    let pg=req.params.pg;

    sql = `select id, title, writer,
           contents, date_format(wdate, '%Y-%m-%d') wdate
           from tb_board
           `;
    let results = await commonDB.mysqlRead(sql, []);
    res.render('board/board_list', { session:req.session, boardList : results });
});

async function someFunction() {
  const results = await commonDB.mysqlRead(sql, []);
  // ...
}
// await 쓰려면 async를 꼭 써줘야함. 
// DB 파일이 바뀌어도 commonDB파일만 바꾸면 모든 것이 되도록 함. 



module.exports = router;
