import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { SubjectClass } from './entities/subject_class.entity';
import { Class } from 'src/core/classes/entities/class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, SubjectClass, Class])],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule { }
