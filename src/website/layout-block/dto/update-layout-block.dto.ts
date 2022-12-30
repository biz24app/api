import { PartialType } from '@nestjs/swagger';
import { CreateLayoutBlockDto } from './create-layout-block.dto';

export class UpdateLayoutBlockDto extends PartialType(CreateLayoutBlockDto) {
    id: number;
}
