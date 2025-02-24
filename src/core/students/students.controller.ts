import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from 'src/middleware/jwt/jwt.guard';
import { Roles } from 'src/common/decorator/roles.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('api/v1/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  async create(@Body() createStudentDto: CreateStudentDto, @Request() req) {

    createStudentDto.user_id = req.user.user_id

    return await this.studentsService.create(createStudentDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.studentsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.studentsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return await this.studentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  async remove(@Param('id') id: string) {
    return await this.studentsService.remove(id);
  }
}
