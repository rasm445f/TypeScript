import { Request, Response } from 'express';
import Mechanic, { IMechanic } from '../models/mechanicModel';

export async function getAllMechanics(req: Request, res: Response) {
    try {
        const mechanics = await Mechanic.find();
        res.status(200).json(mechanics);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    } // Add the missing closing brace here
}

export async function createMechanic(req: Request, res: Response) {
    const mechanicData: IMechanic = req.body;

    const newMechanic = new Mechanic(mechanicData);

    try {
        await newMechanic.save();
        res.status(201).json(newMechanic);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
}
