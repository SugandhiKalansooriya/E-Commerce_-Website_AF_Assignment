import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import promotionRouter from './router/promotion.router.js';
import customerRouter from './router/customer.router.js';
import tradersRouter from './router/trader.router.js'
import itemRouter from './router/item.router.js'
import cart_itemRouter from './router/cart.router.js';
import wishlistRouter from './router/wishlist.router.js';
import cors from '@koa/cors';


const app=new Koa();
app.use(bodyParser());
app.use(cors());
app.use(promotionRouter.routes())
   .use(promotionRouter.allowedMethods());
app.use(customerRouter.routes())
   .use(customerRouter.allowedMethods()); 
 app.use(tradersRouter.routes())
   .use(tradersRouter.allowedMethods());   
app.use(itemRouter.routes())
   .use(itemRouter.allowedMethods()); 
app.use(cart_itemRouter.routes())
   .use(cart_itemRouter.allowedMethods()); 
app.use(wishlistRouter .routes())
   .use(wishlistRouter .allowedMethods());          

app.use(ctx=>{
    ctx.set('Content-Type','text/html')
    ctx.body="<h3>Not Found  <h3>";
    ctx.status=404;
})
app.listen(5000,()=>{
    console.log('Application is running on port 5000')
});