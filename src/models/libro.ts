import mongoose, { Schema, model } from 'mongoose'

export interface Libro extends mongoose.Document {
    titulo: string;
    autor: string;
    isbn: string;
};

const libroSchema = new Schema({
    titulo: String,
    autor: String,
    isbn: String
});

export default model<Libro>('Libro', libroSchema);