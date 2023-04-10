USE mydb;

CREATE TABLE tb_board
(
member_id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
userid VARCHAR(100) UNIQUE,
PASSWORD VARCHAR(20),
username VARCHAR(100),
nickname VARCHAR(100),
phone VARCHAR(20),
email VARCHAR(100),
zipcode CHAR(5),
address1 VARCHAR(100),
address2 VARCHAR(100),
wdate DATETIME 
);

SELECT * FROM tb_board;

INSERT INTO tb_board(title, writer, wdate, contents)
VALUES('제목', '작성자', NOW(), '내용');

-- << < 1 2 3 4 5 6 7 8 9 10 > >>
-- 디비쿼리   limit 시작위치값, 길이 1 0~9
-- 1    10~19
-- 2    20~29

SELECT * FROM tb_board
LIMIT 0, 10;

-- @rownum - 변수를 선언해서 값을 0으로 초기화를 하고
-- 임시테이블로 B라고 준다

SELECT id, title
FROM tb_board, (SELECT @rownum:=0) B
ORDER BY id DESC;
LIMIT 0, 10;]

SELECT A.id, A.title, A.writer
       ,dateformat(A.wdate, '%Y-%m-%d') wdate
FROM
(
SELECT A.id, A.title, A.writer, A.wdate
,@rownum:=@rownum+1
FROM tb_board A, (SELECT @rownum:=0) B
ORDER BY id DESC
)A
LIMIT 10, 10;



















