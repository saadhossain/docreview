import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { DoctorModule } from './doctors/doctors.module';

@Module({
  imports: [UserModule, DoctorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
