import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SiteLayoutService } from './site-layout.service';
import { CreateSiteLayoutDto } from './dto/create-site-layout.dto';
import { UpdateSiteLayoutDto } from './dto/update-site-layout.dto';

@Controller('site-layout')
export class SiteLayoutController {
  constructor(private readonly siteLayoutService: SiteLayoutService) {}

  @Post()
  create(@Body() createSiteLayoutDto: CreateSiteLayoutDto) {
    return this.siteLayoutService.create(createSiteLayoutDto);
  }

  @Get()
  findAll() {
    return this.siteLayoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteLayoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiteLayoutDto: UpdateSiteLayoutDto) {
    return this.siteLayoutService.update(+id, updateSiteLayoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteLayoutService.remove(+id);
  }
}
