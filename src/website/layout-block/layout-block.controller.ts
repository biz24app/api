import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LayoutBlockService } from './layout-block.service';
import { CreateLayoutBlockDto } from './dto/create-layout-block.dto';
import { UpdateLayoutBlockDto } from './dto/update-layout-block.dto';

@Controller('v1/layout-block')
export class LayoutBlockController {
  constructor(private readonly layoutBlockService: LayoutBlockService) {}

  @Post()
  create(@Body() createLayoutBlockDto: CreateLayoutBlockDto) {
    return this.layoutBlockService.create(createLayoutBlockDto);
  }

  @Get()
  findAll() {
    return this.layoutBlockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.layoutBlockService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLayoutBlockDto: UpdateLayoutBlockDto) {
    return this.layoutBlockService.update(+id, updateLayoutBlockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.layoutBlockService.remove(+id);
  }
}
