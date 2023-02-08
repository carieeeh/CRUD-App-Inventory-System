import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 8080,
  password: "MysqlCarieAcct123",
  database: "marketplace",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello, this is the backend");
});

app.get("/zarathelle", (req, res) => {
  const q = "SELECT * FROM zarathelle";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/zarathelle", (req, res, next) => {
  const q =
    "INSERT INTO zarathelle ( `prod_name`, `prod_description`, `image`, `price`, `stocks`, `materials` ) VALUES (?)";
  const values = [
    req.body.prod_name,
    req.body.prod_description,
    req.body.image,
    req.body.price,
    req.body.stocks,
    req.body.materials,
  ];
  db.query(q, [values], (err, data) => {
    console.log(err, data);
    if (err) return res.json(err);
    return res.json("Successfully executed");
  });
});

app.delete("/zarathelle/:id", (req, res) => {
  const necklaceId = req.params.id;
  const q = "DELETE FROM zarathelle WHERE id=?";

  db.query(q, [necklaceId], (err, data) => {
    console.log(err, data);
    if (err) return res.json(err);
    return res.json("Successfully Deleted");
  });
});

app.put("/zarathelle/:id", (req, res) => {
  const necklaceId = req.params.id;

  let queries = [];

  for (const [key, value] of Object.entries(req.body)) {
    if (value) {
      queries.push(`\`${key}\`='${value}'`);
    }
  }

  let q = `UPDATE zarathelle SET ${queries.join(",")} WHERE id=${
    req.params.id
  }`;

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json("Item has been successfully updated");
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});
