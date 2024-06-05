import express from 'express';
import routertransfer from './routes/routertransfer.js';
import routeruser from './routes/routeruser.js';

const app = express(); 
const PORT = process.env.PORT || 3000;


//middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes:
app.use('/', routeruser);
app.use('/', routertransfer);


app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));