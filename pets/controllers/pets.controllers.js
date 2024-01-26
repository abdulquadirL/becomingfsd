import { getItem, listItems, editItems, addItems, deleteItems} from '../models/pets.models.js';

export const getPet = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listItems = ( req, res ) => {
    try{
        const resp = listItems()
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editItems = ( req, res) => {
    try {
        const resp = editItems(parseInt(req.params.id), req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const addItems = ( req, res ) => {
    try {
        const resp = addItems(req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err);
    }
} 

export const deleteItems = ( req, res ) => {
    try {
        const resp = deleteItems(parseInt(req.param.id))
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}  