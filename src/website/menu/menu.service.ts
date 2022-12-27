import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) { }

  create(createLayoutDto: CreateMenuDto) {
    const site = this.menuRepository.create(createLayoutDto);
    this.menuRepository.save(createLayoutDto);
    return site;
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  findOne(id: number): Promise<Menu> {
    return this.menuRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateMenuDto>) {
    this.menuRepository.update({ id }, data);
    return this.menuRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.menuRepository.delete(id);
    return 'success';
  }
}
