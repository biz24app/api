import { Page } from 'src/website/page/entities/page.entity';
import { Section } from 'src/website/section/entities/section.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PageSection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sectionSetting: string;

    @Column()
    displayOrder: number;

    @Column()
    pageId: number;
    
    @ManyToOne(() => Page, (page) => page.pageSections)
    page: Page

    @Column()
    sectionId: number;
    
    @ManyToOne(() => Section, (section) => section.pageSections)
    section: Section

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}


