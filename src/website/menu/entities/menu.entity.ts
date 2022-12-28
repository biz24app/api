import { MenuItem } from 'src/website/menu-item/entities/menu-item.entity';
import { Site } from 'src/website/site/entities/site.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    siteId: number;
/*
    @ManyToOne(type => Site)
    @JoinColumn([
    { name: "siteId", referencedColumnName: "id" }
    ])
    site: Site;
*/

    @ManyToOne(() => Site, (site) => site.menus)
    site: Site

    @OneToMany(() => MenuItem, (menuItem) => menuItem.menu)
    menuItems: MenuItem[]

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}
