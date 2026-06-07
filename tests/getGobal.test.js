const client = require('../index');

describe('getGlobal', () => {
  it('should return a promise', async () => {
    const response = client.getGlobal();
    await expect(response).resolves.toBeNull(); // or some other expected behavior
  });
});