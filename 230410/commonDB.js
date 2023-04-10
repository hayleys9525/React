// board.js에서 DB 접근을 하고, member.js에서 DB 접근
// ip를 코드에 박아놓는 건 엄청 위험한 거야. 서버에 자기가 서버 아이피를 프로그램에 박아버리면
// ip가 바뀌면....? KT 데이터센터가 LG 데이터센터로 바뀌면...?
// text 파일에 ip를 적도록 하거나...

//프레임워크를 쓰면 비슷한 코딩이 되기 때문에 개발자의 실수 폭주를 막을 수 있음. 
var mysql = require("mysql");
const DBinfo={      // 공통의 데이터 형태를 JSON 형태로...
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"1234",
    database:"mydb",
    port:"3306"
}
let readpool = mysql.createPool(DBinfo);
async function mysqlRead(sql, params)
{
    let promise = new Promise((resolve, reject)=>{
        readpool.getConnection( (err,conn)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            conn.query(sql,params,(err,rows)=>{
                console.log(sql);
                console.log(rows);
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
                conn.release();
            })
        })
    });
    await promise;  // 비동기식
    return promise; // promise 형태로 함수가 끝나면 반환하세요. 
}
exports.mysqlRead = mysqlRead; //mysqlRead로 밖에서 읽을 수 있게 해주자. 
exports.DBinfo = DBinfo;
