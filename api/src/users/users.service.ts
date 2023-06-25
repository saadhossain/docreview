import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService{
    async getAllUsers(userName:string){
        return `Information of the User ${userName} retrived...`
    }
}