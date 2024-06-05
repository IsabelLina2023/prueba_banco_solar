import { addTransferQuery, getTransferQuery } from "../models/queriestransfer.js";

export const addTransfer = async (req, res) => {
    const { emisor, receptor, monto } = req.body;
    try {
        const agrega = await addTransferQuery(emisor, receptor, monto);
        res.status(200).send(agrega);
    } catch (error) {
        res.status(500).send(error);
    };
};

export const getTransfer = async (req, res) => {
    try {
        const obtener = await getTransferQuery();
        res.status(200).send(obtener);
    } catch (error) {
        res.status(500).send(error);
    };
};