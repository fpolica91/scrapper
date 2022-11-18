import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AxiosService {
  constructor(private httpService: HttpService) {}
  get<T>(url: string): Promise<AxiosResponse<T, any>> {
    return firstValueFrom(this.httpService.get<T>(url));
  }
}
