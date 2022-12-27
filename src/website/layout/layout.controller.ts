import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LayoutService } from './layout.service';
import { CreateLayoutDto } from './dto/create-layout.dto';
import { UpdateLayoutDto } from './dto/update-layout.dto';

@Controller('v1/layout')
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) {}

  @Post()
  create(@Body() createLayoutDto: CreateLayoutDto) {
    return this.layoutService.create(createLayoutDto);
  }

  @Get()
  findAll() {
    return this.layoutService.findAll();
  }

  @Get(':id')
  findOne(@Body() id: number) {
    return this.layoutService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiteDto: UpdateLayoutDto) {
    return this.layoutService.update(+id, updateSiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.layoutService.remove(+id);
  }
}
