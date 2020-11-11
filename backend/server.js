const { request } = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const express = require('express');
const products = require('./data/products');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('Api running');
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);

	res.json(product);
});

app.listen(
	process.env.PORT || 5000,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${
			process.env.PORT || 5000
		}`,
	),
);
