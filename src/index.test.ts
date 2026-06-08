import { Server, InMemoryTransport, McpError } from '.';

describe('root exports', () => {
  it('exports Server', () => {
    expect(Server).toBeDefined();
  });

  it('exports InMemoryTransport', () => {
    expect(InMemoryTransport).toBeDefined();
  });

  it('exports McpError', () => {
    expect(McpError).toBeDefined();
  });
});