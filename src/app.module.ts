import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [QueueModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
