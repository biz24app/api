import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePageSectionDto } from './dto/create-page-section.dto';
import { UpdatePageSectionDto } from './dto/update-page-section.dto';
import { PageSection } from './entities/page-section.entity';

@Injectable()
export class PageSectionService {

  constructor(
    @InjectRepository(PageSection) private pageSectionRepository: Repository<PageSection>,
  ) { }

  create(createPageSectionDto: CreatePageSectionDto) {
    const pageSection = this.pageSectionRepository.create(createPageSectionDto);
    return this.pageSectionRepository.save(pageSection);
  }

  findAll(): Promise<PageSection[]> {
    return this.pageSectionRepository.find();
  }

  findOne(id: number): Promise<PageSection> {
    return this.pageSectionRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdatePageSectionDto>) {
    this.pageSectionRepository.update({ id }, data);
    return this.pageSectionRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.pageSectionRepository.delete(id);
    return 'success';
  }
}
