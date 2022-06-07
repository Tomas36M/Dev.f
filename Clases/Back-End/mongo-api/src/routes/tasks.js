import { Router } from "express";
const router = Router();

//DB Connection
import { connect } from '../database';
import { ObjectId } from 'mongodb'

const collection = 'task'

//get
router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection(collection).find({}).toArray();
    res.json(result);
})

//get by title
router.get('/title/:title', async (req, res) => {
    const { title } = req.params;
    const db = await connect();
    const result = await db.collection(collection).findOne({ title: title });
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({
            message: `The task with title: ${title}, was not found`
        });
    }
})

//get by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection(collection).find({ _id: ObjectId(id) }).toArray();
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({
            message: `The task with id: ${id}, was not found`
        });
    }
})

//delete
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection(collection).deleteOne({ _id: ObjectId(id) });
    if (result.deletedCount == 1) {
        res.status(204).json({message: `The task with id: ${id} was deleted!`});
    } else {
        res.status(404).send({
            message: `The task with id: ${id}, was not found`
        });
    }
})

//post
router.post('/', async (req, res) => {
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    const result = db.collection(collection).insert(task);
    res.send(result);
})

//update
router.post('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    const result = await db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: task });
    res.json({ message: `Task ${id} was updated!` });
})

export default router;