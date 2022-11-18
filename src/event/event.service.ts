import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AxiosService } from 'src/axios/axios.service';

@Injectable()
export class EventService {
  constructor(private readonly axiosService: AxiosService) {}
  private readonly logger = new Logger(EventService.name);

  @Cron('45 * * * * *')
  handleCron() {
    // this.axiosService
    //   .get('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((res) => {
    //     this.logger.log(res.data);
    //   });
    this.logger.debug('Called when the current second is 45');
  }
}
