export class ApiService {
  async healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    };
  }
}
