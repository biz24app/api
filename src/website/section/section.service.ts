import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './entities/section.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section) private sectionRepository: Repository<Section>,
  ) { }

  create(createCategoryDto: CreateSectionDto) {
    const site = this.sectionRepository.create(createCategoryDto);
    return this.sectionRepository.save(site);
  }

  findAll(): Promise<Section[]> {
    return this.sectionRepository.find();
  }

  findOne(id: number): Promise<Section> {
    return this.sectionRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateSectionDto>) {
    this.sectionRepository.update({ id }, data);
    return this.sectionRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.sectionRepository.delete(id);
    return 'success';
  }
}
