import { Module } from '@nestjs/common';
import { DoctorController } from './doctors.controller';
import { DoctorServices } from './doctors.services';

@Module({
    controllers: [DoctorController],
    providers: [DoctorServices]
})
export class DoctorModule {}