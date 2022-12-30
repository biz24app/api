import { Layout } from 'src/website/layout/entities/layout.entity';
import { Site } from 'src/website/site/entities/site.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class SiteLayout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    siteId: number;
    
    @ManyToOne(() => Site, (site) => site.siteLayout)
    site: Site

    @Column()
    layoutId: number;
    
    @ManyToOne(() => Layout, (layout) => layout.siteLayoutes)
    layout: Layout

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}


