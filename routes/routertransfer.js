import express from 'express';
import { addTransfer, getTransfer } from '../controller/controllertransfer.js'
const router = express.Router();

router.post('/transferencia', addTransfer);

router.get('/transferencias', getTransfer);

router.get("*", (req, res) => {
    res.send("404 - page not found");
  });


export default router;