const request = require('supertest');
const app = require('../index.js'); 

describe('Riders API Tests', () => {
  it('should get all riders', async () => {
    const response = await request(app)
      .get('/api/riders');

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});


describe('Delete Rider API Tests', () => {
    let testRiderId; 
  
    it('should delete a rider', async () => {
      const newRider = {
        riderid: 123, 
        name: 'Ali',
        phone: '1234567890',
        email: 'ali@gmail.com',
        status: 'available',
      };
  
      const addResponse = await request(app)
        .post('/api/addRider')
        .send(newRider);
  
      testRiderId = addResponse.body.data._id;
  
      const deleteResponse = await request(app)
        .post('/riders/deleteRider')
        .send({ riderid: testRiderId });
  
      expect(deleteResponse.statusCode).toBe(200);
      expect(deleteResponse.body.status).toBe('success');
    });
  });
  