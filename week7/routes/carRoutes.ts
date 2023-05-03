import express from 'express';
import { getAllCars, createCar } from '../controllers/carController';

const router = express.Router();

router.get('/', getAllCars);
router.post('/', createCar);

export default router;
