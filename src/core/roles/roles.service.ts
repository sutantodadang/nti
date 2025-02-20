import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { Role as EnumRole } from '../../common/enum/role.enum';


@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) { }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {

    const role = await this.rolesRepository.findOne({ where: { role_unique_name: createRoleDto.role_unique_name as EnumRole } });

    if (role) {
      throw new HttpException("Role already exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const result = await this.rolesRepository.save({ role_name: createRoleDto.role_name, role_unique_name: createRoleDto.role_unique_name as EnumRole, });

    if (!result) {
      throw new HttpException("failed created role", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return result
  }

  async findAll(): Promise<Role[]> {
    return await this.rolesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
