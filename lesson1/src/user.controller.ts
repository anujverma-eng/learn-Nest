import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getUser() {
    return await this.userService.getUser();
  }

  @Get('/all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
