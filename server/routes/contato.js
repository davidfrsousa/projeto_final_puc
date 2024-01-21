import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(process.argv[1]);

const router = express.Router();

router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

export default router;