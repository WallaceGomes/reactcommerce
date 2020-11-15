const dotenv = require('dotenv');
const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use('/api/products', productRoutes);

app.use(errorHandler);

app.listen(
	process.env.PORT || 5000,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${
			process.env.PORT || 5000
		}`,
	),
);
