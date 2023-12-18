import Router from '@koa/router'

import {deleteCustomer, get,getAll,save,Update} from '../api/customer.api.js'
const customerRouter=new Router({
    prefix:'/customers'
});

customerRouter.get('/',(ctx)=>{
    ctx.body=getAll();
    ctx.set('Content-Type','application/json');
    ctx.status=200;
})

customerRouter.post('/',(ctx)=>{
    const data=ctx.request.body;
    ctx.body=save(data);
    ctx.set('Content-Type','application/json');
    ctx.status=201;
})

customerRouter.get('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});


customerRouter.put('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=Update(id,ctx.request.body);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});

customerRouter.delete('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    deleteCustomer(id);
    ctx.status=204;
});

export default customerRouter;