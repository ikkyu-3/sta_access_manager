const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// POST /register
app.post("/register", (req, res) => {
  console.log("req", req);
  // res.statusCode = 201;
  res.statusCode = 400;
  res.send(req.body);
  console.log("res", res);
});

// POST /entry
app.post("/entry", (req, res) => {
  const { id } = req.body;
  res.statusCode = 201;
  // res.statusCode = 400;
  res.send({
    id,
    user: {
      mail: "test@hoge.com",
      isEntry: true
    }
  });
});

// POST /exit
app.post("/exit", (req, res) => {
  const { id } = req.body;
  res.statusCode = 201;
  // res.statusCode = 400;
  res.send({
    id,
    user: {
      mail: "test@hoge.com",
      isEntry: false
    }
  });
});

// GET /user/{id}/status
app.get("/user/:id/status", (req, res) => {
  const { id } = req.params;
  res.statusCode = 200;
  // res.statusCode = 400;
  res.send({
    id,
    user: {
      isEntry: false
    }
  });
});

// GET /users
app.get("/users", (req, res) => {
  res.statusCode = 200;
  // res.statusCode = 400;
  res.send([
    {
      id: "test-id-1",
      user: {
        name: "test-user1",
        isEntry: true,
        purpose: "WORK"
      }
    },
    {
      id: "test-id-2",
      user: {
        name: "test-user2",
        isEntry: true,
        purpose: "CIRCLE"
      }
    },
    {
      id: "test-id-3",
      user: {
        name: "test-user3",
        isEntry: false,
        purpose: "MEET_UP"
      }
    }
  ]);
});

app.listen(3030);
