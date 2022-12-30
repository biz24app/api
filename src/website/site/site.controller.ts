import { Controller, Get, Post, Body, Patch, Param, Delete,Request, UseGuards } from '@nestjs/common';
import { SiteService } from './site.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('v1/site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req,@Body() createSiteDto: CreateSiteDto) {
    return this.siteService.create(createSiteDto,req.user.sub);
  }

  @Get('all')
  findAll() {
    return this.siteService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findUserWise(@Request() req) {
    return this.siteService.findUserWise(req.user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Request() req,@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.siteService.update(+id, updateSiteDto,req.user.sub);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteService.remove(+id);
  }
}
