import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) { }

  create(createCategoryDto: CreateCategoryDto) {
    const site = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(site);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, data: Partial<UpdateCategoryDto>) {
    this.categoryRepository.update({ id }, data);
    return this.categoryRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.categoryRepository.delete(id);
    return 'success';
  }
}
