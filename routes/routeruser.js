import express from 'express';
import { home, addUser, getUser, editUser, deleteUser } from '../controller/controlleruser.js';

const router = express.Router();

router.get('/inicio', (req, res) =>{
    res.send('Hola mundo, server on 🔥');
});

router.get('/', home);

router.post('/usuario', addUser);

router.get('/usuarios', getUser);

router.put('/usuario', editUser);

router.delete('/usuario', deleteUser);


export default router;