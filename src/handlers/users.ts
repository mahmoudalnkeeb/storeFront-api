import { User, UsersModel } from '../models/user';
import { Request, Response, NextFunction } from 'express';
import { sign } from '../middlewares/authorization';

const users = new UsersModel();

// list users endpoint.
export async function index(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const UserInfo = await users.index();
    res.status(200).json(UserInfo);
    next()
  } catch (error) {
    res.status(400);
    res.json({ message: 'something went wrong' });
    next();
  }
}

//  get User by id endpoint.
export async function show(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const UserInfo = await users.show(parseInt(id));
    res.status(200).json(UserInfo);
    next();
  } catch (error) {
    res.status(400);
    res.json({ message: `cannot find User with id : ${req.params.id}` });
    next();
  }
}
// create User endpoint.

export async function create(token:string , req: Request, res: Response, next: NextFunction) {
  try {
    const User: User = {
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email,
      hash_string: req.body.password,
    };
    const newUser = await users.create(User);
    res.status(200).json({newUser, token});
    next();
  } catch (error) {
    res.status(400);
    res.json({ message: 'data entered is not valid' });
    next();
  }
}
// update User endpoint.

export async function update(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newUser = await users.update(
      req.body.firstname,
      req.body.lastname,
      req.body.email
    );
    res.status(200).json(newUser);
    next();
  } catch (error) {
    res.status(400);
    res.json({ message: 'data entered is not valid' });
  }
  next();
}


// delete User endpoint

export async function destroy(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const UserInfo = await users.destroy(id);
    res.status(200).json(UserInfo);
    next();
  } catch (error) {
    res.status(400);
    res.json({ message: `cannot find User with id : ${req.params.id}` });
  }
  next();
}
