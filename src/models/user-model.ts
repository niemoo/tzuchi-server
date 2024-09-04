import { User } from '@prisma/client';

export type UserResponse = {
  email: string;
  password: string;
  token?: string;
};

export type CreateUserRequest = {
  email: string;
  password: string;
};

export function toUserResponse(user: User) {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
  };
}
