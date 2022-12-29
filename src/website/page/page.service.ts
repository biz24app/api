import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Page } from './entities/page.entity';

@Injectable()
export class PageService {
  constructor(
    @InjectRepository(Page) private pageRepository: Repository<Page>,
  ) { }

  create(createSiteDto: CreatePageDto) {
    const site = this.pageRepository.create(createSiteDto);
    this.pageRepository.save(createSiteDto);
    return site;
  }

  findAll(): Promise<Page[]> {
    return this.pageRepository.find();
  }

  findOne(id: number): Promise<Page> {
    return this.pageRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdatePageDto>) {
    this.pageRepository.update({ id }, data);
    return this.pageRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.pageRepository.delete(id);
    return 'success';
  }
}
