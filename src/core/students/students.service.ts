import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { User } from 'src/core/users/entities/user.entity';


@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(createStudentDto: CreateStudentDto): Promise<{ message: string }> {

    const user = await this.usersRepository.findOne({ where: { user_id: createStudentDto.user_id } });
    if (!user) {
      throw new HttpException("User not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const result = await this.studentRepository.save({ student_name: createStudentDto.student_name, student_grade: createStudentDto.student_grade, user });
    if (!result) {
      throw new HttpException("Student failed not created", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: "Student created" };
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async findOne(id: string): Promise<Student | null> {
    return await this.studentRepository.findOne({ where: { student_id: id } });
  }

  async update(id: string, updateStudentDto: UpdateStudentDto): Promise<{ message: string }> {

    const user = await this.usersRepository.findOne({ where: { user_id: updateStudentDto.user_id } });
    if (!user) {
      throw new HttpException("User not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const student = await this.studentRepository.findOne({ where: { student_id: id } });
    if (!student) {
      throw new HttpException("Student not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const result = await this.studentRepository.update({ student_id: id }, updateStudentDto);
    if (!result) {
      throw new HttpException("Student not updated", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: "Student updated" };

  }

  async remove(id: string): Promise<{ message: string }> {

    const result = await this.studentRepository.delete({ student_id: id });
    if (!result) {
      throw new HttpException("Student not deleted", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: "Student deleted" };
  }
}
