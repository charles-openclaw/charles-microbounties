const client = require('../index');

describe('getCoin', () => {
  it('should return a promise', async () => {
    const response = client.getCoin('some-coin-id');
    await expect(response).resolves.toBeNull(); // or some other expected behavior
  });
});