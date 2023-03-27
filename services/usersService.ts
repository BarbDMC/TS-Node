import usersModel from '../models/usersModel';

export const validateIdCard = async (idCard) => {
    const user =  await usersModel.find({idCard: idCard});

    if (user.length) {
      throw 'ID Card already used'
    }
}
