import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUser, RegisterUser } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/core/roles/entities/role.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
    private jwtService: JwtService
  ) { }

  async register(req: RegisterUser): Promise<{ message: string }> {

    const user = await this.usersRepository.findOne({ where: { email: req.email } });

    if (user) {
      throw new HttpException("User already exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const hashPass = await bcrypt.hash(req.password, 10);

    const resultRole = await this.rolesRepository.findOne({ where: { role_id: req.role_id } });

    if (!resultRole) {
      throw new HttpException("Creating user failed", HttpStatus.INTERNAL_SERVER_ERROR);
    }


    const result = await this.usersRepository.save({ user_name: req.user_name, email: req.email, password: hashPass, role: resultRole });

    if (!result) {
      throw new HttpException("Creating user failed", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: "User created successfully" };
  }


  async login(req: LoginUser): Promise<{ access_token: string }> {

    const user = await this.usersRepository.findOne({ where: { email: req.email } });

    if (!user) {
      throw new HttpException("User does not exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const isPasswordValid = await bcrypt.compare(req.password, user.password);

    if (!isPasswordValid) {
      throw new HttpException("Invalid password", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const payload = { sub: user.user_id };


    return { access_token: await this.jwtService.signAsync(payload) };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
