import {randomBytes} from 'crypto'
const customers =new Map();

export const save =({fname,email,city})=>{
  const customer={id:randomBytes(16).toString('hex'),fname,email,city};
  customers.set(customer.id,customer);
  return customer;
};

export const get=(id)=>{
    const customer=customers.get(id);
   

    if(!customer){
        throw new Error(`Notfound for thr ID ${id}`);
        
    }
    return customer;
};


export const getAll=( )=>{
    return[...customers.values()];
   

    
};

export const Update=(id,{fname,email,city} )=>{
    if(!customers.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    const customer={id:randomBytes(16).toString('hex'),fname,email,city};
    customers.set(customer.id,customer);
  return customer;
};

export const deleteCustomer=(id)=>{
    if(!customers.has(id)) {
       throw new Error (`Notfound for thr ID ${id}`)
    }
    customers.delete(id);

};