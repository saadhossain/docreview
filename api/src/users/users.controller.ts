import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller()
export class UserController{
    constructor(private readonly userService: UserService) {}
    @Get('users')
    getUsers(){
        return this.userService.getAllUsers('Saad Hossain')
    }
}