import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLayoutBlockDto } from './dto/create-layout-block.dto';
import { UpdateLayoutBlockDto } from './dto/update-layout-block.dto';
import { LayoutBlock } from './entities/layout-block.entity';

@Injectable()
export class LayoutBlockService {

  constructor(
    @InjectRepository(LayoutBlock) private layoutBlockRepository: Repository<LayoutBlock>,
  ) { }

  create(createLayoutBlockDto: CreateLayoutBlockDto) {
    const block = this.layoutBlockRepository.create(createLayoutBlockDto);
    return this.layoutBlockRepository.save(block);
  }

  findAll(): Promise<LayoutBlock[]> {
    return this.layoutBlockRepository.find();
  }

  findOne(id: number): Promise<LayoutBlock> {
    return this.layoutBlockRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateLayoutBlockDto>) {
    this.layoutBlockRepository.update({ id }, data);
    return this.layoutBlockRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.layoutBlockRepository.delete(id);
    return 'success';
  }
}
