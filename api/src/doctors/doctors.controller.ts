import { Body, Controller, Get, Post } from '@nestjs/common';
import { DoctorServices } from './doctors.services';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorServices:DoctorServices){}
    @Post('add-profile')
    getDoctors(@Body()data: any) {
        return data
        // return this.doctorServices.getDoctors(data)
    }
}