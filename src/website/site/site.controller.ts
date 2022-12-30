import { Controller, Get, Post, Body, Patch, Param, Delete,Request, UseGuards } from '@nestjs/common';
import { SiteService } from './site.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('v1/site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post()
  create(@Body() createSiteDto: CreateSiteDto) {
    return this.siteService.create(createSiteDto,1);
  }

  @Get('all')
  findAll() {
    return this.siteService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findUserWise(@Request() req) {
    //return req.user;
    console.log(req.user);
    return this.siteService.findUserWise(1);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.siteService.update(+id, updateSiteDto,1);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteService.remove(+id);
  }
}
