import { Menu } from 'src/website/menu/entities/menu.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class MenuItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    target: string;

    @Column()
    menuId: number;

    @Column()
    parentId?: number;

    /*
    @ManyToOne(type => Menu)
    @JoinColumn([
    { name: "menu_id", referencedColumnName: "id" }
    ])
    menu: Menu;

    @ManyToOne(type => MenuItem)
    @JoinColumn([
        { name: "parentId", referencedColumnName: "id" }
    ])
    menuItem: MenuItem;
*/


    @ManyToOne(() => Menu, (menu) => menu.menuItems)
    menu: Menu

    @Column({ type: 'datetime', default: () => 'NOW()' })
    createdOn: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;

    @Column({ default: true })
    isActive: boolean;
}
