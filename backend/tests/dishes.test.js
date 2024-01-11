const request = require('supertest');
const app = require('../index.js'); 

describe('Dishes API Tests', () => {
  let testDishId;

  it('should add a new dish', async () => {
    const newDish = {
      name: 'Test Dish',
      price: '10.99',
      des: 'Test description for the dish',
    };

    const response = await request(app)
      .post('/api/addDish')
      .send(newDish);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data).toHaveProperty('_id');
    testDishId = response.body.data._id; 
  });

  it('should get all dishes', async () => {
    const response = await request(app)
      .get('/api/getDishes');

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should delete a dish', async () => {
    const response = await request(app)
      .post('/api/deleteDish')
      .send({ _id: testDishId }); 

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
  });
});
