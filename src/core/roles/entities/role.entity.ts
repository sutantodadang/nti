
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
    @PrimaryGeneratedColumn("uuid")
    role_id: string;

    @Column()
    role_name: string;

    @Column()
    role_unique_name: string;

    @Column({ default: true })
    is_active: boolean;


    @Column({ default: new Date })
    created_at: Date;

    @Column({ default: new Date })
    updated_at: Date;
}
