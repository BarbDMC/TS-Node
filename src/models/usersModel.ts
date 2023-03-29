import mongoose, { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/usersInterface';

const UserSchema = new Schema<IUser>({
  idCard: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  middleName: { type: String},
  surname: { type: String, required: true },
  secondSurname: { type: String},
  email: { type: String, required: true, unique: true },
});

export const usersModel = model('User', UserSchema);