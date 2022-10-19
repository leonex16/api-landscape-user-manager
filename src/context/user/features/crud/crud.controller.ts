import { Optional } from '@core/types';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import type { UserDTO, UserEditableDTO } from '@user/dto';
import { UserCRUDService } from './crud.service';

@Controller('/')
export class UserCRUDController {
  constructor(private readonly service: UserCRUDService) {}

  @Post()
  async create(@Body() userEditableDTO: UserEditableDTO) {
    // TODO: ADD ERROR HANDLER
    return this.service.create(userEditableDTO);
  }

  @Get()
  async findAll(): Promise<Array<UserDTO>> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Optional<UserDTO>> {
    return this.service.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedData: UserEditableDTO,
  ): Promise<Optional<UserDTO>> {
    return this.service.update(id, updatedData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
