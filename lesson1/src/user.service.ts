import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello, User after 2 sec');
      }, 5000);
    });
  }
  getAllUsers(): string {
    return 'Hello, All Users';
  }
}
