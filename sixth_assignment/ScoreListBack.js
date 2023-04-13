var express = require('express');
var router = express.Router();
let commonDB = require("./commonDB");

/* GET home page. */
/* http:// localhost:9090/hero/list */
router.get('/list', async function(req, res, next) {
    let sql = `
    select A.id, A.user_name, A.kor, A.eng, A.mat
from tb_score A;
    `;
    let results = await commonDB.mysqlRead(sql,[]);
    res.json(results);
  /* res.json([
    { id: 1, name: "이순신", desc: "임진왜란승리" },
    { id: 2, name: "강감찬", desc: "임진왜란승리" },
    { id: 3, name: "을지문덕", desc: "임진왜란승리" },
    { id: 4, name: "세종대왕", desc: "임진왜란승리" },
    { id: 5, name: "문종", desc: "임진왜란승리" },
  ]
 ) */
});
//http://localhost:9090/hero/view/1
router.get('/list/:id', async function (req, res, next) {
  try {
    let id = req.params.id;
    let sql = `
select A.id, A.user_name, A.kor, A.eng, A.mat
from tb_score A where A.id=?;
    `;
    let results = await commonDB.mysqlRead(sql, [id]);
    res.json({ "result": "success", "user":results[0] });
  } catch (e) {
    console.log(e);
    res.json({ result: "fail" });
  }
});

// router.post('/write', async function(req, res, next) {
//     try
//     {
//     let score_name = req.body.hero_name;
//     let hero_desc = req.body.hero_desc;
//     let sql = `
//     INSERT INTO tb_hero(hero_name, hero_desc, wdate)
//     VALUES(?,?,NOW())
//     `;
//     await commonDB.mysqlRead(sql, [hero_name, hero_desc]);
//     res.json({"result":"success"});
//     }
//     catch(e)
//     {
//         console.log(e);
//         res.json({"result":"fail"});
//     }
// })



// router.post('/update', async function (req, res, next) {
//   try {
//     let id = req.body.id;
//     let hero_name = req.body.hero_name;
//     let hero_desc = req.body.hero_desc;
//     let sql = `update tb_hero set hero_name=?
//     ,hero_desc=? where id=? `;
//     await commonDB.mysqlRead(sql, [hero_name, hero_desc, id]);
//     res.json({ result: "success" });
//   } catch (e) {
//     console.log(e);
//     res.json({ result: "fail" });
//   }
  
// });

module.exports = router;
