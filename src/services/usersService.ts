import { usersModel } from '../models/usersModel';

export const validateIdCard = async (idCard: String) => {
    const user =  await usersModel.findOne({idCard: idCard});
    return Object.keys(user).length === 0;
}
