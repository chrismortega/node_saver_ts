// Imports
import { Item } from "../models/item/Item";
import { ItemList } from "../models/item/ItemList";

// repository methods
export const getAll = async (): Promise<ItemList> => { return items; };

export const get = async (id: number): Promise<Item> => {
    const item: Item = items[id]; 
    if (item) {
      return item;
    }
    else { throw new Error("No record found"); }
};

export const add = async (newItem: Item): Promise<void> => {
  const id = new Date().valueOf();
  items[id] = {
    ...newItem,
    id
  };
};

export const update = async (updatedItem: Item): Promise<void> => {
    if (items[updatedItem.id]) {
      items[updatedItem.id] = updatedItem;
    }
    else { throw new Error("No record found to update"); }
};

export const remove = async (id: number): Promise<void> => {
    const record: Item = items[id];
    if (record) {
      delete items[id];
    }
    else { throw new Error("No record found to remove"); }
  };

// In memory data store
const items: ItemList = {
    1: {    
      id: 1,
      name: "Burger",
      price: 5.99,
      description: "Tasty",
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
      id: 2,
      name: "Pizza",
      price: 2.99,
      description: "Cheesy",
      image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
      id: 3,
      name: "Tea",
      price: 1.99,
      description: "Informative",
      image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
  };