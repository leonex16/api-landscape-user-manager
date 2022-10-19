import { Crypto } from '@libs/crypto';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserRepository } from '@user/repository';
import { AccessService } from './access.service';

const crypto = new Crypto();
// const userRepository = new UserRepository();
const userDB = {
  id: '17e52b19-791c-49be-86a4-b4b37cb9627a',
  name: 'John Doe 3',
  email: 'XXXXXXXXXXXX',
  password: '$2b$10$i6p.tDrODzeP76iycO/bUeaKwP0pr7IafGFeA/331RXupywJ7LXvC',
};
const accessTable = [];

@Controller('')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @Post()
  async create(@Body() user: { email: string; password: string }) {
    // TODO: Find by email
    const matchPassword = await crypto.compare(user.password, userDB.password);
    const accessLog = {
      userId: userDB.id,
      timestamp: +new Date(),
      status: matchPassword ? 'OK' : 'DENIED',
    };

    accessTable.push(accessLog);

    return matchPassword ? accessLog : 'User or password not valid';
  }

  @Get()
  findAll() {
    return accessTable;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return accessTable.filter(({ userId }) => userId === id);
  }
}
