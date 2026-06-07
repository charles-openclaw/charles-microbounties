import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: '/api',
});

interface ChatResponse {
  // Add properties as needed
}

interface SessionSummary {
  // Add properties as needed
}

const get = async <T>(path: string): Promise<T> => {
  const response = await api.get(path);
  return response.data;
};

const sendChat = async (prompt: string, sessionId?: string): Promise<ChatResponse> => {
  const response = await api.post('/chat', { prompt, sessionId });
  return response.data;
};

const listSessions = async (): Promise<SessionSummary[]> => {
  const response = await api.get('/sessions');
  return response.data;
};

const verifySiwe = async (message: string, signature: string): Promise<any> => {
  const response = await api.post('/verify-siwe', { message, signature });
  return response.data;
};

const verifyToken = async (): Promise<any> => {
  const response = await api.post('/verify-token');
  return response.data;
};

const post = async <T>(path: string, data: any): Promise<T> => {
  const response = await api.post(path, data);
  return response.data;
};

const deleteRequest = async <T>(path: string): Promise<T> => {
  const response = await api.delete(path);
  return response.data;
};

export { get, sendChat, listSessions, verifySiwe, verifyToken, post, deleteRequest };