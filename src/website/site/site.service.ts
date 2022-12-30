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

  create(createSiteDto: CreateSiteDto,userId:number) {
    const site = this.siteRepository.create(createSiteDto);
    site.createBy = userId;
    return this.siteRepository.save(site);
  }

  findAll(): Promise<Site[]> {
    return this.siteRepository.find();
  }

  findUserWise(userId: number): Promise<Site[]> {
    return this.siteRepository.find({
      where: {
        createBy: userId,
      },
    });
  }

  findOne(id: number): Promise<Site> {
    return this.siteRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateSiteDto>,userId: number) {
    return this.siteRepository.findOne({
      where: {
        id: id,
      },
    }).then(res => {
      if (res) {
        res.name = data.name;
        res.isActive = data.isActive;
        res.categoryType = data.categoryType;
        res.imageStorageLocaion = data.imageStorageLocaion;
        res.longDescription = data.longDescription;
        res.updateBy = userId;
        return this.siteRepository.update({ id }, res);
      }
  });
  }

  remove(id: number): string {
    this.siteRepository.delete(id);
    return 'success';
  }
}
