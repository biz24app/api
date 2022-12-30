import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SiteLayoutService } from './site-layout.service';
import { UpdateSiteLayoutDto } from './dto/update-site-layout.dto';
import { LayoutService } from '../layout/layout.service';
import { CreateLayoutDto } from '../layout/dto/create-layout.dto';
import { CreateSiteLayoutCDto } from './dto/create-site-layout-c.dto';
import { CreateSiteLayoutDto } from './dto/create-site-layout.dto';

@Controller('v1/site-layout')
export class SiteLayoutController {
  constructor(
    private readonly siteLayoutService: SiteLayoutService,
    private readonly layoutService: LayoutService
  ) { }

  @Post()
  create(@Body() createSiteLayoutCDto: CreateSiteLayoutCDto) {
    if (createSiteLayoutCDto.layout) {
      var layoutDto = new CreateLayoutDto();
      layoutDto.isActive = true;
      layoutDto.name = createSiteLayoutCDto.layout;
      return this.layoutService.create(layoutDto).then(res => {
        var siteLayoutDto = new CreateSiteLayoutDto();
        siteLayoutDto.isActive = createSiteLayoutCDto.isActive || false;
        siteLayoutDto.layoutId = res.id;
        siteLayoutDto.siteId = createSiteLayoutCDto.siteId;
        return this.siteLayoutService.create(siteLayoutDto);
      });
    }else{
      var siteLayoutDto = new CreateSiteLayoutDto();
        siteLayoutDto.isActive = createSiteLayoutCDto.isActive || false;
        siteLayoutDto.layoutId = createSiteLayoutCDto.layoutId;
        siteLayoutDto.siteId = createSiteLayoutCDto.siteId;
        return this.siteLayoutService.create(siteLayoutDto);
    }
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
