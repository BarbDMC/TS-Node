import {Request, Response} from 'express';
import usersModel from '../models/usersModel';
import {validateIdCard} from '../services/usersService';

export const createUser = async (req: Request, res: Response) => {
  try {
    await validateIdCard(req.body.idCard);

    await usersModel.create({
        idCard: req.body.idCard,
        firstName: req.body.firstName,
        surname: req.body.surname,
        email: req.body.email,
    });

    res.send('User created successfully')
  } catch (error) {
    res.send(error);
  }
};
