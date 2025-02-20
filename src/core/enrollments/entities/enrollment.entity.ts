
import { Student } from 'src/core/students/entities/student.entity';
import { SubjectClass } from 'src/core/subjects/entities/subject_class.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Enrollment {
    @PrimaryGeneratedColumn("uuid")
    enrollment_id: string;

    @ManyToOne(() => SubjectClass, (subjectClass) => subjectClass.subject_class_id, { nullable: false })
    @JoinColumn({ name: 'subject_class_id', referencedColumnName: 'subject_class_id' })
    subjectClass: SubjectClass;

    @ManyToOne(() => Student, (student) => student.student_id, { nullable: false })
    @JoinColumn({ name: 'student_id', referencedColumnName: 'student_id' })
    student: Student;

    @Column({ default: new Date })
    enrollment_date: Date;

    @Column({ default: new Date })
    created_at: Date;

    @Column({ default: new Date })
    updated_at: Date;
}

