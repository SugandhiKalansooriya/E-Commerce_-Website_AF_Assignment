import {randomBytes} from 'crypto'
const traders =new Map();

export const save =({name,email,businessName,address,contactNo})=>{
  const trader={id:randomBytes(16).toString('hex'),name,email,businessName,address,contactNo};
  traders.set(trader.id,trader);
  return trader;
};

export const get=(id)=>{
    const trader=traders.get(id);
   

    if(!trader){
        throw new Error(`Notfound for thr ID ${id}`);
        
    }
    return trader;
};


export const getAll=( )=>{
    return[...traders.values()];
   

    
};

export const Update=(id,{name,email,businessName,address,contactNo} )=>{
    if(!traders.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    const trader={id,name,email,businessName,address,contactNo};
    traders.set(trader.id,trader);
  return trader;
};

export const deletetreader=(id)=>{
    if(!traders.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    traders.delete(id);

};