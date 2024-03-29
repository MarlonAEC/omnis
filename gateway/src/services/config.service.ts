export class ConfigService {
  private readonly envConfig: { [key: string]: any } = {};

  constructor() {
    this.envConfig = {
      rabbitmq_dsn: process.env.RABBITMQ_DSN
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}