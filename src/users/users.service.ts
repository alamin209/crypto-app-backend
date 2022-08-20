import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user-request.dto';

@Injectable()
export class UsersService {
  async createUser(createUserRequest: CreateUserRequest): Promise<any> {}
}
