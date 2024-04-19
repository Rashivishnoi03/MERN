const express = require("express");
const fsPromises = require('fs/promises');
const productsController = require('./controllers/productsController.js');
const usersController = require('./controllers/usersController.js');
const app = express();
app.use(express.json());



app.use((req, res, next)=>{
   const time = new Date().toLocaleString();
   fsPromises.appendFile('./log.txt',req.url+'\t'+time+'\n' );
    next();
})

const productRouter = express.Router();
const userRouter = express.Router();

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProducts);

productRouter.route('/:id')
.post(productsController.replaceProducts)
.delete(productsController.deleteProducts);

// userRouter
// .put(usersController.getUser)
// .get(usersController.addUser)
// .post(usersController.replaceUser)
// .delete(usersController.deleteUser);


// app.get('/api/products', productsController.getAllProducts);
// app.post('/api/products', productsController.addProducts);
// app.put('/api/products/:id', productsController.replaceProducts);
// app.delete('/api/products/:id', productsController.deleteProducts);
// app.get('/api/products', usersController.getUser);
// app.post('/api/products', usersController.addUser);
// app.put('/api/products', usersController.replaceUser);
// app.delete('/api/products', usersController.deleteUser);


app.listen(1400);