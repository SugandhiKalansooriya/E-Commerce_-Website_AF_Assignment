import {randomBytes} from 'crypto'
const wish_items =new Map();

export const save =({productname, price,madeIn,guarantee_period,description})=>{
  const wish_item={id:randomBytes(16).toString('hex'),productname, price,madeIn,guarantee_period,description};
  wish_items.set(wish_item.id,wish_item);
  return wish_item;
};

export const get=(id)=>{
    const wish_item=wish_items.get(id);
   

    if(!wish_item){
        throw new Error(`Notfound for thr ID ${id}`);
        
    }
    return wish_item;
    
};


export const getAll=( )=>{
    return[...wish_items.values()];
   

    
};

export const Update=(id,{productname, price,madeIn,guarantee_period,description} )=>{
    if(!wish_items.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    const wish_item={productname, price,madeIn,guarantee_period,description};
    wish_items.set(wish_item.id,wish_item);
  return wish_item;
};

export const deleteitem=(id)=>{
    if(!wish_items.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    wish_items.delete(id);

};