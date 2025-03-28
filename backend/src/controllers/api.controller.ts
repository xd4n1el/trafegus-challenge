import { Request, Response } from 'express';
import { ApiService } from '../services/api.service';

export class ApiController {
  private service: ApiService;

  constructor() {
    this.service = new ApiService();
  }

  async healthCheck(req: Request, res: Response): Promise<Response> {
    const data = await this.service.healthCheck();
    return res.json(data);
  }
}
