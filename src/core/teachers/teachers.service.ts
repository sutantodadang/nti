import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/core/users/entities/user.entity';


@Injectable()
export class TeachersService {


  constructor(
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }


  async create(createTeacherDto: CreateTeacherDto): Promise<{ message: string }> {

    const user = await this.usersRepository.findOne({ where: { user_id: createTeacherDto.user_id } });

    if (!user) {
      throw new HttpException("User not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }


    const result = await this.teachersRepository.save({ teacher_name: createTeacherDto.teacher_name, specialization: createTeacherDto.specialization, user });

    if (!result) {
      throw new HttpException("failed added teacher", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: 'Teacher added successfully' }
  }

  async findAll(): Promise<Teacher[]> {
    return await this.teachersRepository.find();
  }

  async findOne(teacher_id: string): Promise<Teacher | null> {
    return await this.teachersRepository.findOne({ where: { teacher_id } });
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<{ message: string }> {

    const user = await this.usersRepository.findOne({ where: { user_id: updateTeacherDto.user_id } });

    if (!user) {
      throw new HttpException("User not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const teacher = await this.teachersRepository.findOne({ where: { teacher_id: id } });

    if (!teacher) {
      throw new HttpException("Teacher not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }


    const result = await this.teachersRepository.update(id, updateTeacherDto);

    if (!result.affected) {
      throw new HttpException("failed updated teacher", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: 'Teacher updated successfully' }

  }

  async remove(id: string): Promise<{ message: string }> {

    const result = await this.teachersRepository.delete(id);

    if (!result.affected) {
      throw new HttpException("failed removed teacher", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: 'Teacher removed successfully' }

  }
}
