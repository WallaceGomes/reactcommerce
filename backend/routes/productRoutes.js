const express = require('express');
const Product = require('../models/productModel');
const HttpError = require('../models/http-error');

const router = express.Router();

// @desc		Fetch all products
// @route		GET /api/products
// @access	Public
router.get('/', async (req, res, next) => {
	try {
		const products = await Product.find({});

		return res.status(200).json(products);
	} catch (err) {
		const error = new HttpError(
			'Server Error, could not find any product',
			500,
		);

		return next(error);
	}
});

// @desc		Fetch single product
// @route		GET /api/products/:id
// @access	Public
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;

	try {
		const product = await Product.findById(id);

		if (!product) {
			const error = new HttpError('Product not found', 404);

			return next(error);
		}

		return res.status(200).json(product);
	} catch (err) {
		const error = new HttpError(
			'Server Error, could not find any product',
			500,
		);

		return next(error);
	}
});

module.exports = router;
