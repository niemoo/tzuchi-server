import supertest from 'supertest';
import { app } from '../src/index';
import { logger } from '../src/log/logging';
import { UserTest } from './test-util';

describe('POST /api/users', () => {
  //   afterEach(async () => {
  //     await UserTest.delete();
  //   });

  it('should reject register new user if request is invalid', async () => {
    const response = await supertest(app).post('/api/users').send({
      email: '',
      password: '',
    });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body).toBeDefined();
  });

  it('should register new user', async () => {
    const response = await supertest(app).post('/api/users').send({
      email: 'test@gmail.com',
      password: 'test1234',
    });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.email).toBe('test@gmail.com');
  });
});
