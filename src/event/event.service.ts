import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { spawn } from 'child_process';
import { cwd } from 'process';
import { AxiosService } from 'src/axios/axios.service';

@Injectable()
export class EventService {
  constructor(private readonly axiosService: AxiosService) {}
  private readonly logger = new Logger(EventService.name);

  @Cron('45 * * * * *')
  handleCron() {
    const file = cwd() + '/src/lib/feed_parser.py';

    const python_process = spawn('python', [file]);

    python_process.stdout.on('data', (data) => {
      console.log('some data here');
      console.log(data.toString());
    });

    this.logger.debug('Called when the current second is 45');
  }
}
