import { Request, Response } from 'express';
import Car, { ICar } from '../models/carModel';

export async function getAllCars(req: Request, res: Response) {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
}

export async function createCar(req: Request, res: Response) {
    const carData: ICar = req.body;

    const newCar = new Car(carData);

    try {
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
}
