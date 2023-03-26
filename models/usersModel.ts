import mongoose, { Schema, Document } from 'mongoose';

interface IUser {
  idCard: string;
  firstName: string;
  middleName?: string,
  surname: string;
  secondSurname?: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  idCard: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  middleName: { type: String},
  lastName: { type: String, required: true },
  secondSurname: { type: String},
  email: { type: String, required: true, unique: true },
});

export default mongoose.model<IUser>('User', UserSchema);