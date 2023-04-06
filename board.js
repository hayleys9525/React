let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");
/* GET home page. */
router.get('/', async function(req, res, next) {
    sql = `select id, title, writer,
           contents, date_format(wdate, '%Y-%m-%d') wdate
           from tb_board
           `;
    let results = await commonDB.mysqlRead(sql, []);
    res.render('board/board_list', { boardList : results });
});

router.get("/view/:id", async function (req, res, next) {
  let id = req.params.id; // id 변수 설정
  let sql = `
            select id, title, writer,
            contents, date_format(wdate, '%Y-%m-%d') wdate, hit, contents
            from tb_board where id=${id}
  `;
  let boardItem = await commonDB.mysqlRead(sql, []);
  console.log(boardItem);
  res.render("board/board_view", { board: boardItem[0] });
});
// await 쓰려면 async를 꼭 써줘야함. 
// DB 파일이 바뀌어도 commonDB파일만 바꾸면 모든 것이 되도록 함. 
module.exports = router;
