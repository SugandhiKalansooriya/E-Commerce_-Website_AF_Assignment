import Router from '@koa/router'

import {deleteitem, get,getAll,save,Update} from '../api/item.api.js'
const itemRouter=new Router({
    prefix:'/items'
});

itemRouter.get('/',(ctx)=>{
    ctx.body=getAll();
    ctx.set('Content-Type','application/json');
    ctx.status=200;
})

itemRouter.post('/',(ctx)=>{
    const data=ctx.request.body;
    ctx.body=save(data);
    ctx.set('Content-Type','application/json');
    ctx.status=201;
})

itemRouter.get('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});


itemRouter.put('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=Update(id,ctx.request.body);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});

itemRouter.delete('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    deleteitem(id);
    ctx.status=204;
});

export default itemRouter;