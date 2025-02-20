
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
    @PrimaryGeneratedColumn("uuid")
    subject_id: string;

    @Column()
    subject_name: string;

    @Column()
    description: string;

    @Column({ default: new Date })
    created_at: Date;

    @Column({ default: new Date })
    updated_at: Date;


}
