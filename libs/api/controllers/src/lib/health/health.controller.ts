import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  response = {
    status: 'ok',
    message: 'It is fine',
  };

  @Get()
  getHealth() {
    return this.response;
  }
}
