import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Block } from './entities/block.entity';

@Injectable()
export class BlockService {

  constructor(
    @InjectRepository(Block) private blockRepository: Repository<Block>,
  ) { }

  create(createBlockDto: CreateBlockDto) {
    const block = this.blockRepository.create(createBlockDto);
    return this.blockRepository.save(block);
  }

  findAll(): Promise<Block[]> {
    return this.blockRepository.find();
  }

  findOne(id: number): Promise<Block> {
    return this.blockRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateBlockDto>) {
    this.blockRepository.update({ id }, data);
    return this.blockRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.blockRepository.delete(id);
    return 'success';
  }
}
