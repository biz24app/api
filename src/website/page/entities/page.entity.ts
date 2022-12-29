import { Site } from 'src/website/site/entities/site.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne } from 'typeorm';

@Entity()
export class Page {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    siteId: number;
    
    @ManyToOne(() => Site, (site) => site.pages)
    site: Site

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}

