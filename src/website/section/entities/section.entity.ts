import { PageSection } from 'src/website/page-section/entities/page-section.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, OneToMany } from 'typeorm';

@Entity()
export class Section {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    json: string;

    @OneToMany(() => PageSection, (pageSection) => pageSection.section)
    pageSections: PageSection[]

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}
