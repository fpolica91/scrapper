import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { spawn } from 'child_process';
import { cwd } from 'process';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('upload-queue') private uploadNewsQueue: Queue) {}

  async addUploadNewsJob(data: any) {
    const file = cwd() + '/src/lib/feed_parser.py';
    const python_process = spawn('python', [
      file,
      'https://www.judicialwatch.org/feed/',
    ]);
    python_process.stdout.on('data', (data) => {
      this.uploadNewsQueue.add('news', {
        data: data.toString(),
      });
    });
  }
}
// ]]QueueService
