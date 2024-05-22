import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Next,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { NextFunction, Request, Response } from 'express';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/add/user')
  @HttpCode(HttpStatus.REQUEST_TIMEOUT)
  addUser(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Next() next: NextFunction,
  ) {
    return {
      success: true,
      message: 'user added successfully',
    };
  }
}
