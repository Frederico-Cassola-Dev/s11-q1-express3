const database = require("../db_connection");

const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then(([user]) => {
      if (user[0] != null) {
        res.status(200).json(user[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postUsers = (req, res) => {
  const { firstname, lastname, age } = req.body;

  database
    .query("INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)", [
      firstname,
      lastname,
      age,
    ])
    .then(([result]) => {
      console.log(result);
      res.location(`/api/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error saving new user");
    });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  console.log("🚀 - id:", id);

  const { firstname, lastname, age } = req.body;

  database
    .query(
      "UPDATE users SET firstname = ?, lastname = ?,  age = ? where id = ?",
      [firstname, lastname, age, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the user");
    });
};

module.exports = { getUsers, getUserById, postUsers, updateUser };
