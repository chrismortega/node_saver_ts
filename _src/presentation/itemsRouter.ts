// imports
import express, { Request, Response } from "express";
import * as ItemRepo from "./../data/ItemRepository";
import { Item } from "../models/item/Item";
import { ItemList } from "../models/item/ItemList";

export const itemsRouter = express.Router();  //express.Router() creates the router

itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const items = await ItemRepo.getAll();
        res.status(200).send(items);
        res.status(200).send();
    }
    catch(e) { res.status(404).send(e.message); }
});