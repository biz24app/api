import { Injectable } from '@nestjs/common';
import { CreatePageSectionDto } from './dto/create-page-section.dto';
import { UpdatePageSectionDto } from './dto/update-page-section.dto';

@Injectable()
export class PageSectionService {
  create(createPageSectionDto: CreatePageSectionDto) {
    return 'This action adds a new pageSection';
  }

  findAll() {
    return `This action returns all pageSection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pageSection`;
  }

  update(id: number, updatePageSectionDto: UpdatePageSectionDto) {
    return `This action updates a #${id} pageSection`;
  }

  remove(id: number) {
    return `This action removes a #${id} pageSection`;
  }
}
