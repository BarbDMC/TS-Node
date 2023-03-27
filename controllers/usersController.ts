const {Request, Response} = require('express');
const res = require('express/lib/response');
const usersModel = require('../models/usersModel.ts');

const createUser = async (req: Request, res: Response) => {
  try {
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

module.exports = createUser;