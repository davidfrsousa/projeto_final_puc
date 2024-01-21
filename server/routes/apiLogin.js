import express from "express";
import { login } from "../database.js";

const router = express.Router();

router.get("/", isAuthenticated, (req, res) => {
  console.log(req.session.user);  
  res.json({ user: req.session.user });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const pw = req.body.password;
  let result = await login(username, pw);
  if (result) {
    //console.log(req.session);
    req.session.user = req.body.username;

    res.json(req.session.user);
    }else {
    res.json("failed");
  }
});

router.get("/checkout", (req, res, next) => {
  req.session = null;
  if(req.session) res.end(req.session.user)
  else res.json('logout successful');
});

function isAuthenticated(req, res, next) {
  if (req.session.user) next();
  else res.json("not logged in");
}

export default router;
export { isAuthenticated };
