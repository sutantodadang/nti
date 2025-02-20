
import { Role } from 'src/core/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    user_id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @OneToOne(() => Role, (role) => role.role_id, { nullable: false, eager: true }) // specify inverse side as a second parameter
    @JoinColumn({ name: 'role_id', referencedColumnName: 'role_id' })
    role: Role;

    @Column({ default: true })
    is_active: boolean;

    @Column({ default: new Date })
    created_at: Date;

    @Column({ default: new Date })
    updated_at: Date;
}
