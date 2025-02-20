import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Enrollment } from './entities/enrollment.entity';
import { Student } from '../students/entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubjectClass } from '../subjects/entities/subject_class.entity';

@Injectable()
export class EnrollmentsService {

  constructor(
    @InjectRepository(Enrollment)
    private enrollmentsRepository: Repository<Enrollment>,
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
    @InjectRepository(SubjectClass)
    private subjectClassRepository: Repository<SubjectClass>,


  ) { }

  async create(createEnrollmentDto: CreateEnrollmentDto): Promise<{ message: string }> {

    const student = await this.studentsRepository.findOne({ where: { student_id: createEnrollmentDto.student_id } });
    if (!student) {
      throw new HttpException("Student not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const subjectClass = await this.subjectClassRepository.findOne({ where: { subject_class_id: createEnrollmentDto.subject_class_id } });
    if (!subjectClass) {
      throw new HttpException("Subject Class not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const enrollment = await this.enrollmentsRepository.findOne({ where: { subjectClass: subjectClass, student: student } });
    if (enrollment) {
      throw new HttpException("Enrollment already exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    createEnrollmentDto.enrollment_date = createEnrollmentDto.enrollment_date ? new Date(createEnrollmentDto.enrollment_date) : new Date();



    const result = await this.enrollmentsRepository.save({ subjectClass, student, enrollment_date: createEnrollmentDto.enrollment_date });
    if (!result) {
      throw new HttpException("Enrollment failed not created", HttpStatus.INTERNAL_SERVER_ERROR);
    }


    return { message: "Enrollment created" };

  }

  async findAllBystudent(student_id: string): Promise<Enrollment[]> {


    return await this.enrollmentsRepository.find({ where: { student: { student_id } }, relations: { subjectClass: { classes: true, subjects: true } } });

  }



  async remove(id: string): Promise<{ message: string }> {

    const enrollment = await this.enrollmentsRepository.findOne({ where: { enrollment_id: id } });
    if (!enrollment) {
      throw new HttpException("Enrollment not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const result = await this.enrollmentsRepository.delete(id);
    if (!result) {
      throw new HttpException("Enrollment failed not deleted", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: "Enrollment deleted" };

  }
}
