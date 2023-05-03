import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
    car: string;
    mechanic: string;
    rating: number;
    comment: string;
}

const ReviewSchema: Schema = new Schema({
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    mechanic: { type: Schema.Types.ObjectId, ref: 'Mechanic', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
});

export default mongoose.model<IReview>('Review', ReviewSchema);
