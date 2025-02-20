import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from 'src/core/teachers/entities/teacher.entity';
import { Class } from './entities/class.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Teacher, Class])],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule { }
