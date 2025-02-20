import { SubjectClass } from 'src/core/subjects/entities/subject_class.entity';
import { Teacher } from 'src/core/teachers/entities/teacher.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Class {
    @PrimaryGeneratedColumn("uuid")
    class_id: string;

    @ManyToOne(() => Teacher, (teacher) => teacher.teacher_id, { nullable: false }) // specify inverse side as a second parameter
    @JoinColumn({ name: 'teacher_id', referencedColumnName: 'teacher_id' })
    teacher: Teacher;

    @Column()
    class_name: string;

    @Column()
    class_room_number: string;

    @Column({ default: new Date })
    created_at: Date;

    @Column({ default: new Date })
    updated_at: Date;

    // @OneToMany(() => SubjectClass, (subjectClass) => subjectClass.classes)
    // subjectClasses: SubjectClass[];
}
