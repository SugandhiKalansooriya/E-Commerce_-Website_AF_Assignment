import {randomBytes} from 'crypto'
const promotions =new Map();

export const save =({startingdate,endingdate,description})=>{
  const  promotion={id:randomBytes(16).toString('hex'),startingdate,endingdate,description};
  promotions.set(promotion.id,promotion);
  return promotion;
};

export const get=(id)=>{
    const promotion=promotions.get(id);
   

    if(!promotion){
        throw new Error(`Notfound for thr ID ${id}`);
        
    }
    return promotion;
};


export const getAll=( )=>{
    return[...promotions.values()];
   

    
};

export const Update=(id,{startingdate,endingdate,description} )=>{
    if(!promotions.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    const promotion={id,startingdate,endingdate,description};
    promotions.set(promotion.id,promotion);
  return promotion;
};

export const deletepromotion=(id)=>{
    if(!promotions.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    promotions.delete(id);

};