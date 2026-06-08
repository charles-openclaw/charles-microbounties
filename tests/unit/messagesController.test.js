const request = require('supertest');
const app = require('../../src/app');

describe('POST /api/messages', () => {
  it('should return 400 if content is empty', async () => {
    const response = await request(app).post('/api/messages').send({ content: '', recipientId: '123' });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid request body');
  });

  it('should return 400 if recipientId is empty', async () => {
    const response = await request(app).post('/api/messages').send({ content: 'Hello', recipientId: '' });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid request body');
  });

  it('should return 201 if message is created successfully', async () => {
    const response = await request(app).post('/api/messages').send({ content: 'Hello', recipientId: '123' });
    expect(response.status).toBe(201);
  });
});