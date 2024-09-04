import { prismaClient } from '../src/db';

export class UserTest {
  static async delete() {
    await prismaClient.user.delete({
      where: {
        email: 'test@gmail.com',
      },
    });
  }
}
