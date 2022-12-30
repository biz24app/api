import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PageSectionService } from './page-section.service';
import { CreatePageSectionDto } from './dto/create-page-section.dto';
import { UpdatePageSectionDto } from './dto/update-page-section.dto';

@Controller('v1/page-section')
export class PageSectionController {
  constructor(private readonly pageSectionService: PageSectionService) {}

  @Post()
  create(@Body() createPageSectionDto: CreatePageSectionDto) {
    return this.pageSectionService.create(createPageSectionDto);
  }

  @Get()
  findAll() {
    return this.pageSectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageSectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageSectionDto: UpdatePageSectionDto) {
    return this.pageSectionService.update(+id, updatePageSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageSectionService.remove(+id);
  }
}
