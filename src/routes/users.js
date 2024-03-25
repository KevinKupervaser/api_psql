const express = require("express");
const userRepo = require("../repos/user-repo.js");

const router = express.Router();

router.get("/users", async (req, res) => {
  // run query to get all users
  const users = await userRepo.find();
  // semd the result back to the person who make the request

  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userRepo.findById(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.post("/users", async (req, res) => {
  const { username, bio } = req.body;
  const user = await userRepo.insert(username, bio);
  res.send(user);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;

  const user = await userRepo.update(id, username, bio);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await userRepo.delete(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
