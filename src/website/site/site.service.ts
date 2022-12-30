import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Site } from './entities/site.entity';

@Injectable()
export class SiteService {

  constructor(
    @InjectRepository(Site) private siteRepository: Repository<Site>,
  ) { }

  create(createSiteDto: CreateSiteDto) {
    const site = this.siteRepository.create(createSiteDto);
    return this.siteRepository.save(site);
  }

  findAll(): Promise<Site[]> {
    return this.siteRepository.find();
  }

  findOne(id: number): Promise<Site> {
    return this.siteRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateSiteDto>) {
    this.siteRepository.update({ id }, data);
    return this.siteRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.siteRepository.delete(id);
    return 'success';
  }
}
