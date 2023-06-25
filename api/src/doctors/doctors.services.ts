import { Injectable } from '@nestjs/common';

@Injectable()
export class DoctorServices{
    async getDoctors(){
        return 'All Doctor Profile'
    }
}