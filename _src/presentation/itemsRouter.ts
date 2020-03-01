// imports
import express, { Request, Response } from 'express';
import * as ItemRepo from './../data/ItemRepository';
import { Item } from '../models/item/Item';
import { ItemList } from '../models/item/ItemList';

export const itemsRouter = express.Router(); //express.Router() creates the router

// todo: make status constants
// todo: refactor to a handleError method
itemsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const items = await ItemRepo.getAll();
        res.status(200).send(items);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

itemsRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        if (id == undefined || id == NaN)
            throw new Error(
                "invalid id value specified: '" + req.params.id + "'"
            );
        const item = await ItemRepo.get(id);
        if (item == undefined) throw new Error('item not found');
        res.status(200).send(item);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

itemsRouter.put('/', async (req: Request, res: Response) => {
    try {
        const item: Item = req.body;
        await ItemRepo.update(item);
        res.sendStatus(200);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

itemsRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        if (id == undefined || id == NaN)
            throw new Error(
                "invalid id value specified: '" + req.params.id + "'"
            );
        const item = await ItemRepo.get(id);
        if (item == undefined) throw new Error('item not found');
        await ItemRepo.remove(id);
        res.sendStatus(200);
    } catch (e) {
        res.status(404).send(e.message);
    }
});
