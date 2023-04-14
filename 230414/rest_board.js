router.post("/save", async function (req, res, next) {
  try {
    let title = req.body.title;
    let writer = req.body.writer;
    let contents = req.body.contents;
    let sql = `
    INSERT INTO tb_board(title, writer, wdate, contents)
    VALUES (?, ?, now(), ?);
    `;
    await commonDB.mysqlRead(sql, [title, writer, contents]);
    res.json({ result: "success" });
  } catch (e) {
    console.log(e);
    res.json({ result: "fail" });
  }
});
