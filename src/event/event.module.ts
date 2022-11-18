import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { AxiosModule } from 'src/axios/axios.module';

@Module({
  imports: [AxiosModule, ScheduleModule.forRoot()],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
