import { Module } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentsController } from './enrollments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/core/students/entities/student.entity';
import { SubjectClass } from 'src/core/subjects/entities/subject_class.entity';
import { Enrollment } from './entities/enrollment.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Student, SubjectClass, Enrollment])],
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService],
})
export class EnrollmentsModule { }
