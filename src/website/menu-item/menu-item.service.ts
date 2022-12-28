import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from '../menu/entities/menu.entity';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { MenuItem } from './entities/menu-item.entity';

@Injectable()
export class MenuItemService {
  constructor(
    @InjectRepository(MenuItem) private menuItemRepository: Repository<MenuItem>,
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) { }

  create(createMenuItemDto: CreateMenuItemDto) {

    return this.menuRepository.findOne({
      where: {
        id: createMenuItemDto.menuId,
      },
    }).then(res => {
      if (res) {
        const menuItem = this.menuItemRepository.create(createMenuItemDto);
        menuItem.menu = res;
        return this.menuItemRepository.save(menuItem);
      }
      throw new Error("Invalid Menu Id");
    });
  }

  findAll(): Promise<MenuItem[]> {
    return this.menuItemRepository.find();
  }

  findOne(id: number): Promise<MenuItem> {
    return this.menuItemRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateMenuItemDto>) {
    this.menuItemRepository.update({ id }, data);
    return this.menuItemRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.menuItemRepository.delete(id);
    return 'success';
  }
}
