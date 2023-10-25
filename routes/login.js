import express from "express";
import { login } from "./../database.js";

const router = express.Router();

router.get("/", isAuthenticated, (req, res) => {
  console.log(req.session.user);
  res.render("login.ejs", { user: req.session.user });
});

router.post("/", async (req, res) => {
  const username = req.body.username;
  const pw = req.body.password;
  let result = await login(username, pw);
  if (result) {
    console.log(req.session);
    req.session.regenerate(function (err) {
      if (err) next(err);

      req.session.user = req.body.username;

      req.session.save(function (err) {
        if (err) return next(err);
        res.redirect("/catalogo");
      });
    });
  } else {
    res.render("login.ejs", { alerta: "Credenciais inválidas" });
  }
});

router.get("/checkout", (req, res, next) => {
  req.session.user = null;
  req.session.save(function (err) {
    if (err) next(err);
    req.session.regenerate(function (err) {
      if (err) next(err);
      res.redirect("/");
    });
  });
});

function isAuthenticated(req, res, next) {
  if (req.session.user) next();
  else res.render("login.ejs");
}

export default router;
export { isAuthenticated };
