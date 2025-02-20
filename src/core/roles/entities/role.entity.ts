
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role as EnumRole } from '../../../common/enum/role.enum';

@Entity()
export class Role {
    @PrimaryGeneratedColumn("uuid")
    role_id: string;

    @Column()
    role_name: string;

    @Column({
        type: "enum",
        enum: EnumRole,
        default: EnumRole.User,
    })
    role_unique_name: EnumRole

    @Column({ default: true })
    is_active: boolean;


    @Column({ default: new Date })
    created_at: Date;

    @Column({ default: new Date })
    updated_at: Date;
}
