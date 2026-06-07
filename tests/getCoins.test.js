const client = require('../index');

describe('getCoins', () => {
  it('should return a promise', async () => {
    const response = client.getCoins();
    await expect(response).resolves.toBeNull(); // or some other expected behavior
  });
});