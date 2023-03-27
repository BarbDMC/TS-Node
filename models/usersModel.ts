const mongoose = require('mongoose');
const { Schema } = mongoose;
interface IUser {
  idCard: string;
  firstName: string;
  middleName?: string,
  surname: string;
  secondSurname?: string;
  email: string;
}

const UserSchema: IUser = new Schema({
  idCard: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  middleName: { type: String},
  lastName: { type: String, required: true },
  secondSurname: { type: String},
  email: { type: String, required: true, unique: true },
});

export default mongoose.model('User', UserSchema);