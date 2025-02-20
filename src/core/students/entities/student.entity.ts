import { User } from 'src/core/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn("uuid")
    student_id: string;

    @OneToOne(() => User, (user) => user.user_id, { nullable: false }) // specify inverse side as a second parameter
    @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
    user: User;


    @Column()
    student_name: string;

    @Column()
    student_grade: string;

    @Column({ default: new Date })
    created_at: Date;

    @Column({ default: new Date })
    updated_at: Date;
}
