import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() createUserRequest: CreateUserRequest): Promise<any> {
    return this.usersService.createUser(createUserRequest);
  }
}
