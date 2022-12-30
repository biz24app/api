import { LayoutBlock } from 'src/website/layout-block/entities/layout-block.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, OneToMany } from 'typeorm';

@Entity()
export class Block {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'datetime',default: () => 'NOW()' })
    createdOn: string;
  
    @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
    updatedOn: string;
  
    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => LayoutBlock, (layoutBlock) => layoutBlock.block)
    layoutBlocks: LayoutBlock[]
}
