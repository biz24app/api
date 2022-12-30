import { PageLayout } from 'src/website/page-layout/entities/page-layout.entity';
import { SiteLayout } from 'src/website/site-layout/entities/site-layout.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, OneToMany } from 'typeorm';

@Entity()
export class Layout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => SiteLayout, (siteLayout) => siteLayout.layout)
    siteLayoutes: SiteLayout[]

    @OneToMany(() => PageLayout, (pageLayout) => pageLayout.layout)
    pageLayoutes: PageLayout[]

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}
