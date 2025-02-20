
import { User } from 'src/core/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn("uuid")
    teacher_id: string;

    @OneToOne(() => User, (user) => user.user_id, { nullable: false }) // specify inverse side as a second parameter
    @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
    user: User;

    @Column()
    teacher_name: string;

    @Column()
    specialization: string;

    @Column({ default: new Date })
    created_at: Date;

    @Column({ default: new Date })
    updated_at: Date;
}
