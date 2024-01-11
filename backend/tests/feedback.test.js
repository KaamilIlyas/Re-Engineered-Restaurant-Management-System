const request = require('supertest');
const app = require('../index.js'); 

describe('Feedback API Tests', () => {
  // Test getting all feedbacks
  it('should get all feedbacks', async () => {
    const response = await request(app)
      .post('/api/getfeedbacks');

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
