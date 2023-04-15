import { usersModel } from "../models/usersModel";
import { IUser } from "../interfaces/usersInterface";

export const createUsers = async (user: IUser) => {
    await usersModel.create({
        idCard: user.idCard,
        firstName: user.firstName,
        surname: user.surname,
        email: user.email,
    });
}

export const updateUser = async (user: IUser) => {
    await usersModel.updateOne(
        { idCard: user.idCard },
        { $set: { ...user } },
        { upsert: true }
    );

}