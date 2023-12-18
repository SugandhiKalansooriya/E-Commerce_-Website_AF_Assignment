import {randomBytes} from 'crypto'
const cart_items =new Map();

export const save =({productname, price,Quantity})=>{
  const cart_item={id:randomBytes(16).toString('hex'),productname, price,Quantity};
  cart_items.set(cart_item.id,cart_item);
  return cart_item;
};

export const get=(id)=>{
    const cart_item=cart_items.get(id);
   

    if(!cart_item){
        throw new Error(`Notfound for thr ID ${id}`);
        
    }
    return cart_item;
    
};


export const getAll=( )=>{
    return[...cart_items.values()];
   

    
};

export const Update=(id,{productname, price,Quantity} )=>{
    if(!cart_items.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    const cart_item={id,productname, price,Quantity};
    cart_items.set(cart_item.id,cart_item);
  return cart_item;
};

export const deleteitem=(id)=>{
    if(!cart_items.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    cart_items.delete(id);

};
