import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Teacher } from 'src/core/teachers/entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from './entities/class.entity';


@Injectable()
export class ClassesService {

  constructor(
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) { }

  async create(createClassDto: CreateClassDto): Promise<{ message: string }> {

    const teacher = await this.teachersRepository.findOne({ where: { teacher_id: createClassDto.teacher_id } });
    if (!teacher) {
      throw new HttpException("Teacher not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const result = await this.classRepository.save({ class_name: createClassDto.class_name, class_room_number: createClassDto.class_room_number, teacher });
    if (!result) {
      throw new HttpException("failed added class", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: 'Class added successfully' }

  }

  async findAll(): Promise<Class[]> {
    return await this.classRepository.find();
  }

  async findOne(id: string): Promise<Class | null> {
    return await this.classRepository.findOne({ where: { class_id: id } });
  }

  async update(id: string, updateClassDto: UpdateClassDto): Promise<{ message: string }> {

    const teacher = await this.teachersRepository.findOne({ where: { teacher_id: updateClassDto.teacher_id } });
    if (!teacher) {
      throw new HttpException("Teacher not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const result = await this.classRepository.update(id, { class_name: updateClassDto.class_name, class_room_number: updateClassDto.class_room_number, teacher });
    if (!result) {
      throw new HttpException("failed updated class", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: 'Class updated successfully' }
  }

  async remove(id: string): Promise<{ message: string }> {

    const result = await this.classRepository.delete(id);
    if (!result) {
      throw new HttpException("failed deleted class", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: 'Class deleted successfully' };
  }
}
