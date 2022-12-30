import { Layout } from 'src/website/layout/entities/layout.entity';
import { Page } from 'src/website/page/entities/page.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PageLayout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pageId: number;
    
    @ManyToOne(() => Page, (page) => page.pageSections)
    page: Page

    @Column()
    layoutId: number;
    
    @ManyToOne(() => Layout, (layout) => layout.pageLayoutes)
    layout: Layout

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}



