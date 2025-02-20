import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './core/users/users.module';
import { User } from './core/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from './core/roles/roles.module';
import { Role } from './core/roles/entities/role.entity';
import { TeachersModule } from './core/teachers/teachers.module';
import { Teacher } from './core/teachers/entities/teacher.entity';
import { StudentsModule } from './core/students/students.module';
import { Student } from './core/students/entities/student.entity';
import { ClassesModule } from './core/classes/classes.module';
import { Class } from './core/classes/entities/class.entity';
import { SubjectsModule } from './core/subjects/subjects.module';
import { EnrollmentsModule } from './core/enrollments/enrollments.module';
import { Subject } from './core/subjects/entities/subject.entity';
import { SubjectClass } from './core/subjects/entities/subject_class.entity';
import { Enrollment } from './core/enrollments/entities/enrollment.entity';
import { JwtStrategy } from './middleware/jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LoggerMiddleware } from './middleware/logging/log.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    }),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      entities: [User, Role, Teacher, Student, Class, Subject, SubjectClass, Enrollment],
      synchronize: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule,
    RolesModule,
    TeachersModule,
    StudentsModule,
    ClassesModule,
    SubjectsModule,
    EnrollmentsModule,
    PassportModule
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware).forRoutes("*")
  }
}

