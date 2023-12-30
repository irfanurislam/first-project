import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByCustomId(payload?.id);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  // checking if the user is already deleted
  const isDeleted = user.isDeleted

  if (isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user delted !');
  }
  const userStatus = user.status

  if (userStatus=== "blocked") {
    throw new AppError(httpStatus.NOT_FOUND, 'This user blokced !');
  }
  

  const isPasswordMatch = await User.isPasswordMatched(payload.password,user.password);
 if ( !isPasswordMatch) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user doesnot match !');
  }

  const jwtPayload ={
    userId:user.id,
    role:user.role
  }
  const accesToken = jwt.sign(
    jwtPayload,
    config.jwt_access_secret as string,
      {expiresIn: '10d'}
  ) 

  return {
   accesToken,
   needsPasswordChange: user.needsPasswordChange
  };
};




 





  


export const AuthServices = {
  loginUser,
 
};