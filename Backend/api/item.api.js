import {randomBytes} from 'crypto'
const items =new Map();

export const save =({productname, price,madeIn,guarantee_period,description})=>{
  const item={id:randomBytes(16).toString('hex'),productname, price,madeIn,guarantee_period,description};
  items.set(item.id,item);
  return item;
};

export const get=(id)=>{
    const item=items.get(id);
   

    if(!item){
        throw new Error(`Notfound for thr ID ${id}`);
        
    }
    return item;
    
};


export const getAll=( )=>{
    return[...items.values()];
   

    
};

export const Update=(id,{productname, price,madeIn,guarantee_period,description} )=>{
    if(!items.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    const item={id,productname, price,madeIn,guarantee_period,description};
    items.set(item.id,item);
  return item;
};

export const deleteitem=(id)=>{
    if(!items.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    items.delete(id);

};