import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePageLayoutDto } from './dto/create-page-layout.dto';
import { UpdatePageLayoutDto } from './dto/update-page-layout.dto';
import { PageLayout } from './entities/page-layout.entity';

@Injectable()
export class PageLayoutService {
  constructor(
    @InjectRepository(PageLayout) private pageLayoutRepository: Repository<PageLayout>,
  ) { }

  create(createPageLayoutDto: CreatePageLayoutDto) {
    const pageLayout = this.pageLayoutRepository.create(createPageLayoutDto);
    return this.pageLayoutRepository.save(pageLayout);
  }

  findAll(): Promise<PageLayout[]> {
    return this.pageLayoutRepository.find();
  }

  findOne(id: number): Promise<PageLayout> {
    return this.pageLayoutRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdatePageLayoutDto>) {
    this.pageLayoutRepository.update({ id }, data);
    return this.pageLayoutRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.pageLayoutRepository.delete(id);
    return 'success';
  }

}
