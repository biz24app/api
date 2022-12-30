import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PageLayoutService } from './page-layout.service';
import { CreatePageLayoutDto } from './dto/create-page-layout.dto';
import { UpdatePageLayoutDto } from './dto/update-page-layout.dto';

@Controller('page-layout')
export class PageLayoutController {
  constructor(private readonly pageLayoutService: PageLayoutService) {}

  @Post()
  create(@Body() createPageLayoutDto: CreatePageLayoutDto) {
    return this.pageLayoutService.create(createPageLayoutDto);
  }

  @Get()
  findAll() {
    return this.pageLayoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageLayoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageLayoutDto: UpdatePageLayoutDto) {
    return this.pageLayoutService.update(+id, updatePageLayoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageLayoutService.remove(+id);
  }
}
