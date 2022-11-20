import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('upload-queue')
export class UploadProcessor {
  @Process('news')
  handleCsvFiles(job: Job) {
    console.log('this comes from the python script');
    console.log(job.data);
  }
}
