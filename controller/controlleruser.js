import { addUserQueries, getUserQueries, editUserQueries, deleteUserQueries } from "../models/queriesuser.js";
  import path from "path";
  const __dirname = path.resolve();
  
  export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  };
  
  export const addUser = async (req, res) => {
    const { nombre, balance } = req.body;
    console.log(req.body);
    try {
      await addUserQueries(nombre, balance);
      res.status(201).send("Se agregó usuario");
    } catch (error) {
      console.log(error);
      res.status(500).send("No se pudo agregar el usuario");
    };
  };
  
  export const getUser = async (req, res) => {
    try {
      const usuario = await getUserQueries();
      res.status(200).send(usuario);
    } catch (error) {
      res.status(500).send("No se pudo obtener la lista de usuarios");
    };
  };
  
  export const editUser = async (req, res) => {
    const { id } = req.query;
    const { name, balance } = req.body;
    const datos = [name, balance, id];
    try {
      const usuario = await editUserQueries(datos);
      res.status(200).send(usuario);
    } catch (error) {
      res.status(500).send("No se pudo editar el usuario");
    };
  };
  
  export const deleteUser = async (req, res) => {
    const { id } = req.query;
    try {
      const usuario = await deleteUserQueries(id);
     res.status(200).send(usuario);
    } catch (error) {
      res.status(500).send("No se pudo eliminar al usuario");
    };
  };