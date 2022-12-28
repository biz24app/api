import { Menu } from 'src/website/menu/entities/menu.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, OneToMany } from 'typeorm';

@Entity()
export class Site {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    categoryType: string;

    @Column()
    imageStorageLocaion: string;

    @Column()
    shortDescription: string;

    @Column()
    longDescription: string;

    @Column()
    screenshots: string;

    @OneToMany(() => Menu, (menu) => menu.site)
    menus: Menu[]

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}
