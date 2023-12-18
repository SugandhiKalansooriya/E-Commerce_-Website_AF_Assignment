import Router from '@koa/router'

import {deleteitem, get,getAll,save,Update} from '../api/wishlist.api.js'
const wishlistRouter=new Router({
    prefix:'/wish_list'
});

wishlistRouter.get('/',(ctx)=>{
    ctx.body=getAll();
    ctx.set('Content-Type','application/json');
    ctx.status=200;
})

wishlistRouter.post('/',(ctx)=>{
    const data=ctx.request.body;
    ctx.body=save(data);
    ctx.set('Content-Type','application/json');
    ctx.status=201;
})

wishlistRouter.get('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});


wishlistRouter.put('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=Update(id,ctx.request.body);
    ctx.set('Content-Type','application/json');
    ctx.status=200;
});

wishlistRouter.delete('/:id',(ctx)=>{
    const id= ctx.params.id;
    ctx.body=get(id);
    deleteitem(id);
    ctx.status=204;
});

export default wishlistRouter;