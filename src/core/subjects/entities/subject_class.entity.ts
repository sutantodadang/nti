
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Subject } from './subject.entity';
import { Class } from 'src/core/classes/entities/class.entity';

@Entity({ name: 'subject_class' })
export class SubjectClass {
    @PrimaryGeneratedColumn("uuid")
    subject_class_id: string;

    // @Column()
    // subject_id: string;

    // @Column()
    // class_id: string;

    @ManyToOne(() => Subject, (subject) => subject.subject_id,)
    @JoinColumn({ name: 'subject_id', referencedColumnName: 'subject_id' })
    subjects: Subject;

    @ManyToOne(() => Class, (cls) => cls.class_id,)
    @JoinColumn({ name: 'class_id', referencedColumnName: 'class_id' })
    classes: Class;

    @Column({ default: new Date })
    created_at: Date;

    @Column({ default: new Date })
    updated_at: Date;
}
