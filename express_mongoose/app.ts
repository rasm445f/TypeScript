import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import express from 'express';
import morgan from 'morgan';
import logger from './utility/logger';
import mongoose, { ConnectOptions } from 'mongoose';

// Import routes
import carRoutes from './routes/carRoutes';
import mechanicRoutes from './routes/mechanicRoutes';
import reviewRoutes from './routes/reviewRoutes';


// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));


const app = express();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log('Development mode...');
}

app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files

// Use the imported routes
app.use('/cars', carRoutes);
app.use('/mechanics', mechanicRoutes);
app.use('/reviews', reviewRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello World',
    });
});

app.post('/', (req, res) => {
    const jsonData = req.body;
    console.log();
    res.status(201).json({
        status: 'success',
        data: jsonData,
    });
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
