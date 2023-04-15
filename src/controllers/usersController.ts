import { Request, Response } from 'express';
import { validateIdCard } from '../services/usersService';
import { createUsers } from '../repositories/usersRepository';

export const createUser = async (req: Request, res: Response) => {
  try {
/*     const idCardExists = await validateIdCard(req.body.idCard);

    if (idCardExists) {
      res.send('Id card is already used');
    }

    await createUsers(req.body) */
    res.send('User created successfully');

  } catch (error) {
    res.send(error);
  }
};


export const updateUser = async (req: Request, res: Response) => {
  try {

    res.send('User updated successfully');

  } catch (error) {
    res.send(error);
  }
};
