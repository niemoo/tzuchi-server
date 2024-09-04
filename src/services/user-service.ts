import { prismaClient } from '../db';
import { CreateUserRequest, toUserResponse, UserResponse } from '../models/user-model';
import { ErrorResponse } from '../response/error-response';
import { UserValidation } from '../validations/user-validation';
import { Validation } from '../validations/validation';
import bcrypt from 'bcrypt';

export class UserService {
  static async register(req: CreateUserRequest): Promise<UserResponse> {
    const registerReq = Validation.validate(UserValidation.REGISTER, req);

    const totalUserWithSameEmail = await prismaClient.user.count({
      where: {
        email: registerReq.email,
      },
    });

    if (totalUserWithSameEmail != 0) {
      throw new ErrorResponse(400, 'Email already exists');
    }

    registerReq.password = await bcrypt.hash(registerReq.password, 10);

    const user = await prismaClient.user.create({
      data: registerReq,
    });

    return toUserResponse(user);
  }
}
