import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    fullName: string;
    phone: string;
    deliveryAddress: string;
    subscription: {
        status: string;
        expiryDate: Date;
        planType: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            index: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
        },
        fullName: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        deliveryAddress: {
            type: String,
            trim: true,
        },
        subscription: {
            status: { type: String, default: 'inactive' },
            expiryDate: { type: Date },
            planType: { type: String, default: 'free' },
        },
    },
    { timestamps: true },
);

export const User = model<IUser>('User', userSchema);
