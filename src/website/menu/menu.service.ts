import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from '../site/entities/site.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
    @InjectRepository(Site) private siteRepository: Repository<Site>
  ) { }

  create(createMenuDto: CreateMenuDto) {
    return this.siteRepository.findOne({
      where: {
        id: createMenuDto.siteId,
      },
    }).then(res => {
      if (res) {
        const menu = this.menuRepository.create(createMenuDto);
        menu.site = res;
        return this.menuRepository.save(menu);
      }
      throw new Error("Invalid Site Id");
    });
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
