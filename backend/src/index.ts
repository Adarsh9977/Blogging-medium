import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { verify } from 'hono/jwt';
import { blogRouter } from './routes/blog';

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET:   string,
  },
  Variables:{
    userId:       string;
  }
}>()

// app.use('/api/v1/blog/*', async (c, next) => {
//   const authHeader = c.req.header("Authortization")||"";
//   const user =await verify(authHeader, c.env.JWT_SECRET);
//   if(user){
//       c.set("userId", user.id);
//       next();
//   }else{
//     return c.json({
//       message: "you are not logged in"
//     })
//   }
// })


app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog',blogRouter);





export default app
  