import express from 'express';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModal.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res)  => {
    //await Users.remove({});//removes the previous data and ccreates new (id or data)
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
})
);

export default userRouter;