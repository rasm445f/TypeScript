import mongoose, { Schema, Document } from 'mongoose';

export interface ICar extends Document {
    make: string;
    model: string;
    year: number;
    color: string;
}

const CarSchema: Schema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
});

export default mongoose.model<ICar>('Car', CarSchema);
