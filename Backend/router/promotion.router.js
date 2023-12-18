import Router from '@koa/router'

import {deletepromotion, get,getAll,save,Update} from '../api/promotion.api.js'
const promotionRouter=new Router({
    prefix:'/promotions'
});

promotionRouter.get('/',(ctx)=>{
    ctx.body=getAll();
    ctx.set('Content-Type','application/json');
    ctx.status=200;
})

promotionRouter.post('/',(ctx)=>{
    const data=ctx.request.body;
    ctx.body=save(data);
    ctx.set('Content-Type','application/json');
    ctx.status=201;
})

promotionRouter.get('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});


promotionRouter.put('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=Update(id,ctx.request.body);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});

promotionRouter.delete('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    deletepromotion(id);
    ctx.status=204;
});

export default promotionRouter;