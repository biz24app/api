import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLayoutDto } from './dto/create-layout.dto';
import { UpdateLayoutDto } from './dto/update-layout.dto';
import { Layout } from './entities/layout.entity';

@Injectable()
export class LayoutService {

  constructor(
    @InjectRepository(Layout) private layoutRepository: Repository<Layout>,
  ) { }

  create(createLayoutDto: CreateLayoutDto) {
    const site = this.layoutRepository.create(createLayoutDto);
    this.layoutRepository.save(createLayoutDto);
    return site;
  }

  findAll(): Promise<Layout[]> {
    return this.layoutRepository.find();
  }

  findOne(id: number): Promise<Layout> {
    return this.layoutRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateLayoutDto>) {
    this.layoutRepository.update({ id }, data);
    return this.layoutRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.layoutRepository.delete(id);
    return 'success';
  }
}
