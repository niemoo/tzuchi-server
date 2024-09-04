import { z, ZodType } from 'zod';

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    email: z.string().email().min(1, 'Email is required').max(50, 'Email must be less than 50 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters').max(10, 'Password must be less than 10 characters'),
  });
}
