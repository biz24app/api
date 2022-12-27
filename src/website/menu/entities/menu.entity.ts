import { Site } from 'src/website/site/entities/site.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    websiteId: string;

    @ManyToOne(type => Site)
    @JoinColumn([
    { name: "site_id", referencedColumnName: "id" }
    ])
    site: Site;

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}
