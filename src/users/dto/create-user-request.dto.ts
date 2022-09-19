import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {
  @IsEmail()
  @ApiProperty({
    type: String,
    default: 'developer@gmail.com',
    required: true,
    name: 'email',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    default: 'testdeveloper',
    required: true,
    name: 'password',
  })
  password: string;
}
