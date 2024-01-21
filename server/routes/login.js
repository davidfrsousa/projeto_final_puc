import express from "express";
import { login } from "../database.js";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(process.argv[1]);

const router = express.Router();

router.get("/", isAuthenticated, (req, res) => {
  console.log(req.session.user);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  //res.json({ user: req.session.user });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const pw = req.body.password;
  let result = await login(username, pw);
  if (result) {
    //console.log(req.session);
    req.session.user = req.body.username;

    //res.json(req.session.user);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }else {
    //res.json("failed");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
});

router.get("/checkout", (req, res, next) => {
  req.session = null;
  if(req.session) res.end(req.session.user)
  //else res.json('logout successful')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

function isAuthenticated(req, res, next) {
  if (req.session.user) next();
  //else res.json("not logged in");
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
}

export default router;
export { isAuthenticated };
