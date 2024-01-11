const request = require('supertest');
const app = require('../index.js');

describe('Users API Tests', () => {
  let testUserId; 
  // Test adding a user
  it('should add a new user', async () => {
    const newUser = {
      userid: 8, 
      full_name: 'Ahmed',
      address: '123 Test St',
      phone_number: '1234567890',
      email: 'ahmed@gmail.com',
      password: '12345',
    };

    const response = await request(app)
      .post('/api/addUser')
      .send(newUser);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data).toHaveProperty('_id');
    testUserId = response.body.data._id; 
  });

  // Test getting all users
  it('should get all users', async () => {
    const response = await request(app)
      .post('/api/getUsers');

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Test deleting a user
  it('should delete a user', async () => {
    const response = await request(app)
      .post('/api/deleteUser')
      .send({ userid: testUserId }); 

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
  });

  // Test blocking a user
  it('should block a user', async () => {
    const response = await request(app)
      .post('/api/blockUser')
      .send({ userid: testUserId }); 

    expect(response.statusCode).toBe(200);
    expect(response.body.blocked).toBe(1);
  });

  // Test unblocking a user
  it('should unblock a user', async () => {
    const response = await request(app)
      .post('/api/unBlockUser')
      .send({ userid: testUserId });

    expect(response.statusCode).toBe(200);
    expect(response.body.unblocked).toBe(1);
  });
});
