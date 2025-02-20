import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Subject } from './entities/subject.entity';
import { Class } from 'src/core/classes/entities/class.entity';
import { SubjectClass } from './entities/subject_class.entity';
import { FindAllSubjectsDto } from './dto/find-subject.dto';


@Injectable()
export class SubjectsService {

  constructor(
    @InjectRepository(Subject)
    private subjectsRepository: Repository<Subject>,
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
    @InjectRepository(SubjectClass)
    private subjectClassRepository: Repository<SubjectClass>,
  ) { }

  async create(createSubjectDto: CreateSubjectDto): Promise<{ message: string }> {

    const subject = await this.subjectsRepository.findOne({ where: { subject_name: createSubjectDto.subject_name } });
    if (subject) {
      throw new HttpException("Subject already exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const { classes } = createSubjectDto;


    const result = await this.subjectsRepository.save({ subject_name: createSubjectDto.subject_name, description: createSubjectDto.description });
    if (!result) {
      throw new HttpException("Subject not created", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    if (classes && classes.length > 0) {

      const classesResult = await this.classRepository.find({
        where: { class_id: In(classes) }
      });

      if (classesResult.length !== classes.length) {
        throw new HttpException("One or more classes not found", HttpStatus.INTERNAL_SERVER_ERROR);
      }

      const subjectClassMappings: SubjectClass[] = classesResult.map(cls => {
        const subjectClass = new SubjectClass();
        subjectClass.subjects = subject;
        subjectClass.classes = cls;
        return subjectClass;
      });



      await this.subjectClassRepository.save(subjectClassMappings);

    }



    return { message: "Subject created successfully" }
  }

  async findAll(): Promise<FindAllSubjectsDto[]> {

    const subject = await this.subjectsRepository.find();

    const subjectClass = await this.subjectClassRepository.find({
      where: { subjects: { subject_id: In(subject.map(s => s.subject_id)) } },
      relations: { subjects: true }
    });


    return subject.map(s => {
      const subjectClassRes = subjectClass.find(sc => sc.subjects.subject_id === s.subject_id);

      let result: FindAllSubjectsDto = {
        subject_id: s.subject_id,
        subject_class_id: subjectClassRes.subject_class_id,
        subject_name: s.subject_name,
        description: s.description,
        created_at: s.created_at,
        updated_at: s.updated_at,
      }

      return result;
    })


  }

  async findOne(id: string): Promise<Subject | null> {
    return await this.subjectsRepository.findOne({ where: { subject_id: id } });
  }

  async update(id: string, updateSubjectDto: UpdateSubjectDto): Promise<{ message: string }> {

    const subject = await this.subjectsRepository.findOne({ where: { subject_id: id } });
    if (!subject) {
      throw new HttpException("Subject not found", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const { classes, ...subjectUpdateData } = updateSubjectDto;

    const result = await this.subjectsRepository.update(id, subjectUpdateData);
    if (!result) {
      throw new HttpException("Subject not updated", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    if (classes && classes.length > 0) {

      await this.subjectClassRepository.delete({ subjects: subject });

      const classesResult = await this.classRepository.find({
        where: { class_id: In(classes) }
      });

      if (classesResult.length !== classes.length) {
        throw new HttpException("One or more classes not found", HttpStatus.INTERNAL_SERVER_ERROR);
      }


      const subjectClassMappings: SubjectClass[] = classesResult.map(cls => {
        const subjectClass = new SubjectClass();
        subjectClass.subjects = subject;
        subjectClass.classes = cls;
        return subjectClass;
      });


      await this.subjectClassRepository.save(subjectClassMappings);

    }

    return { message: "Subject updated successfully" }

  }

  async remove(id: string): Promise<{ message: string }> {
    const subject = await this.subjectsRepository.findOne({ where: { subject_id: id } });
    if (!subject) {
      throw new HttpException("Subject not found", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const result = await this.subjectsRepository.delete(id);
    if (!result) {
      throw new HttpException("Subject not deleted", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    await this.subjectClassRepository.delete(subject.subject_id);

    return { message: "Subject deleted successfully" }

  }
}
