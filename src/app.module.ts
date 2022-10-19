// import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserCRUDModule } from '@user/features/crud/crud.module';
import { AccessModule } from '@access/access.module';
import { PermissionModule } from '@permission/permission.module';

@Module({
  imports: [
    UserCRUDModule,
    RouterModule.register([
      {
        path: 'users',
        module: UserCRUDModule,
      },
    ]),
    AccessModule,
    RouterModule.register([
      {
        path: 'access',
        module: AccessModule,
      },
    ]),
    PermissionModule,
    RouterModule.register([
      {
        path: 'permission',
        module: PermissionModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
