

import Router from '@koa/router'

import {deletetreader, get,getAll,save,Update} from '../api/trader.api.js'
const tradersRouter=new Router({
    prefix:'/traders'
});

tradersRouter.get('/',(ctx)=>{
    ctx.body=getAll();
    ctx.set('Content-Type','application/json');
    ctx.status=200;
})

tradersRouter.post('/',(ctx)=>{
    const data=ctx.request.body;
    ctx.body=save(data);
    ctx.set('Content-Type','application/json');
    ctx.status=201;
})

tradersRouter.get('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});


tradersRouter.put('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=Update(id,ctx.request.body);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});

tradersRouter.delete('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    deletetreader(id);
    ctx.status=204;
});

export default tradersRouter;