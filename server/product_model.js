import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  database: 'crowdstore',
  user: 'my_user',
  password: 'root',
  port: 5432,
});

export const getProducts = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    });
  }); 
};
export const getProduct = (params) => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM products WHERE id = $1', [params], (error, result) => {
      if (error) {
        reject(error)
      }
      resolve(result.rows[0]);
    });
  });
};

export const createProduct = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, description, image_url, price, logo } = body
    pool.query('INSERT INTO products (name, description, image_url, price, logo) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, description, image_url, price, logo], (error, result) => {
      if (error) {
        reject(error)
      }
      resolve(`A new Product has been added: ${result.rows[0]}`)
    });
  });
};

export const deleteProduct = (params) => {
  return new Promise(function(resolve, reject) {
    pool.query('DELETE FROM products WHERE id = $1', [params], (error, result) => {
      if (error) {
        reject(error)
      }
      resolve(result);
    });
  });
};

export const updateProduct = (params, body) => {
  return new Promise(function(resolve, reject) {
    const { name, description, image_url, price, logo } = body
    pool.query('UPDATE products SET name = $1, description = $2, image_url = $3, price = $4, logo = $5 WHERE id = $6', [name, description, image_url, price, logo, params], (error, result) => {
      if (error) {
        reject(error)
      }
      resolve(`Product updated: ${result}`)
    });
  });
};