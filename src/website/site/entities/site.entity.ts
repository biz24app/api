import { Menu } from 'src/website/menu/entities/menu.entity';
import { Page } from 'src/website/page/entities/page.entity';
import { SiteLayout } from 'src/website/site-layout/entities/site-layout.entity';
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

    @OneToMany(() => Page, (menu) => menu.site)
    pages: Page[]

    @OneToMany(() => SiteLayout, (siteLayout) => siteLayout.site)
    siteLayout: SiteLayout[]


    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}
