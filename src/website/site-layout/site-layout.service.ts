import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSiteLayoutDto } from './dto/create-site-layout.dto';
import { UpdateSiteLayoutDto } from './dto/update-site-layout.dto';
import { SiteLayout } from './entities/site-layout.entity';

@Injectable()
export class SiteLayoutService {

  constructor(
    @InjectRepository(SiteLayout) private siteLayoutRepository: Repository<SiteLayout>,
  ) { }

  create(createSiteLayoutDto: CreateSiteLayoutDto) {
    const siteLayout = this.siteLayoutRepository.create(createSiteLayoutDto);
    return this.siteLayoutRepository.save(siteLayout);
  }

  findAll(): Promise<SiteLayout[]> {
    return this.siteLayoutRepository.find();
  }

  findOne(id: number): Promise<SiteLayout> {
    return this.siteLayoutRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateSiteLayoutDto>) {
    this.siteLayoutRepository.update({ id }, data);
    return this.siteLayoutRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.siteLayoutRepository.delete(id);
    return 'success';
  }
}
