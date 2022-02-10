const express = require('express');
const userRouter = require('./router/users');
const loginRouter = require('./router/login');
const categoryRouter = require('./router/category');
const blogPostsRouter = require('./router/blogPosts');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', blogPostsRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));