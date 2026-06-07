const client = require('../index');

describe('getCoinsOHLCVHistorical', () => {
  it('should return a promise', async () => {
    const response = client.getCoinsOHLCVHistorical('some-coin-id', '1d');
    await expect(response).resolves.toBeNull(); // or some other expected behavior
  });
});