import { Request, Response } from 'express';
import Review, { IReview } from '../models/reviewModel';

export async function getAllReviews(req: Request, res: Response) {
    try {
        const reviews = await Review.find().populate('car mechanic');
        res.status(200).json(reviews);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
} // Add the missing closing brace here

export async function createReview(req: Request, res: Response) {
    const reviewData: IReview = req.body;

    const newReview = new Review(reviewData);

    try {
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
}
