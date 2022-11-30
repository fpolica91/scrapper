import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { spawn } from 'child_process';
import { cwd } from 'process';
import { InjectQueue } from '@nestjs/bull';
import { INITIAL_PROVIDERS } from './static/providers';

interface Provider {
  rss: string;
}

@Injectable()
export class QueueService {
  constructor(@InjectQueue('upload-queue') private uploadNewsQueue: Queue) {}

  async addUploadNewsJob(data: any): Promise<void> {
    INITIAL_PROVIDERS.map((provider: Provider) => {
      const file = cwd() + '/src/lib/feed_parser.py';
      const python_process = spawn('python', [file, provider.rss]);
      python_process.stdout.on('data', (data) => {
        console.log(data.toString());
      });
    });
    // const file = cwd() + '/src/lib/feed_parser.py';
    // const python_process = spawn('python', [
    //   file,
    //   'https://www.judicialwatch.org/feed/',
    // ]);
    // python_process.stdout.on('data', (data) => {
    //   this.uploadNewsQueue.add('news', {
    //     data: data.toString(),
    //   });
    // });
  }
}
// ]]QueueService
