import { Controller, Get, Param } from '@nestjs/common';

const permissions = ['ADMIN', 'VISUALIZACION_DASHBOARDS', 'AUDITORIA'];

@Controller('')
export class PermissionController {
  @Get()
  findAll() {
    return permissions.join(', ');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return permissions[id];
  }
}
