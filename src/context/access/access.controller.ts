import { Crypto } from '@libs/crypto';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserRepository } from '@user/repository';

const crypto = new Crypto();
// const userRepository = new UserRepository();
const userDB = {
  id: '17e52b19-791c-49be-86a4-b4b37cb9627a',
  name: 'John Doe 3',
  email: 'XXXXXXXXXXXX',
  password: '$2b$10$i6p.tDrODzeP76iycO/bUeaKwP0pr7IafGFeA/331RXupywJ7LXvC',
  permission: 2,
};
const permissionDB = {
  userId: '17e52b19-791c-49be-86a4-b4b37cb9627a',
  permission: 'ADMIN',
};
const accessTable = [];

@Controller('')
export class AccessController {
  @Post()
  async create(
    @Body() user: { email: string; password: string; scope: string },
  ) {
    // TODO: Find by email
    const matchPassword = await crypto.compare(user.password, userDB.password);

    // TODO: Find on Permission DB
    user.scope ??= 'ADMIN';
    const matchPermission = permissionDB.permission === user.scope;

    const accessLog = {
      userId: userDB.id,
      timestamp: +new Date(),
      status: 'OK',
    };

    if (matchPassword === false && accessLog.status === 'OK') {
      accessLog.status = 'INVALID_CREDENTIAL';
    }

    if (matchPermission === false && accessLog.status === 'OK') {
      accessLog.status = 'INSUFFICIENT_PERMISSIONS';
    }

    accessTable.push(accessLog);

    return accessLog.status === 'OK' ? accessLog : 'User or password not valid';
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
