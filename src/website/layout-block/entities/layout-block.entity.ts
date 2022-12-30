import { Block } from 'src/website/block/entities/block.entity';
import { Layout } from 'src/website/layout/entities/layout.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class LayoutBlock {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sectionSetting: string;

    @Column()
    displayOrder: number;

    @Column()
    layoutId: number;
    
    @ManyToOne(() => Layout, (layout) => layout.layoutBlocks)
    layout: Layout

    @Column()
    blockId: number;
    
    @ManyToOne(() => Block, (block) => block.layoutBlocks)
    block: Block

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;
}


