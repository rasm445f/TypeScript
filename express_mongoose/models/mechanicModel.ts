import mongoose, { Schema, Document } from 'mongoose';

export interface IMechanic extends Document {
    name: string;
    location: string;
    phoneNumber: string;
}

const MechanicSchema: Schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    phoneNumber: { type: String, required: true },
});

export default mongoose.model<IMechanic>('Mechanic', MechanicSchema);
