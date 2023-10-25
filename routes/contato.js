import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.render("contato.ejs");
});

export default router;