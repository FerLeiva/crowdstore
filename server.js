import express from "express";
import morgan from "morgan";
import { getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
} from './product_model.js';

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

// ALL PRODUCTS
app.get("/products", (req, res) => {
  getProducts()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

// SINGLE PRODUCT
app.get("/products/:id", (req, res) => {
    getProduct(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

// ADD PRODUCT
app.post("/products", (req, res) => {
  createProduct(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

// DELETE PRODUCT
app.delete('/products/:id', (req, res) => {
  const {id} = req.params
  deleteProduct(id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

// UPDATE PRODUCT
app.put("/products/:id", (req, res) => {
  const product = req.body;
  updateProduct(req.params.id, product)
.then(response => {
  res.status(200).send(response);
})
.catch(error => {
  res.status(500).send(error);
})
});

app.listen(port, console.log(`Server running in port ${port}!`));